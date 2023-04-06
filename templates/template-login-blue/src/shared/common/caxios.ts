import axios, { AxiosRequestConfig } from 'axios';

import Router from '@/router';
import store from '@/store';
import TYPES from '@/store/types';

import { DeviceUtil } from '@/shared/utils';
import { ResponseResult, BusinessError } from '@/shared/models';

import { CONSTANTS } from './constants';
import { CaxiosType, ResponseCode } from './enums';
import { Prompt } from './prompt';
import { Token } from './token';

const isIE9 = DeviceUtil.isIE9();

window['cancelAxios'] = null;

export class Caxios {
  /**
   * 通用选项
   */
  private static commonOptions: any = {
    responseType: 'json',
    timeout: CONSTANTS.TIMEOUT,
  };

  /**
   * 设置headers
   * @param options 选项
   * @param type 类型
   */
  private static setHeaders(options: any = {}, type: CaxiosType = CaxiosType.Default) {
    !options['headers'] && (options['headers'] = {});

    // 设置默认请求头内容类型
    if (options.method === 'POST' && !options['headers']['Content-Type']) {
      options['headers']['Content-Type'] = 'application/json; charset=UTF-8';
    }

    // 设置token
    if (type === CaxiosType.FullLoadingToken || type === CaxiosType.PageLoadingToken || type === CaxiosType.Token) {
      let tokenInfo = Token.getTokenInfo();
      options['headers'][CONSTANTS.TOKEN] = tokenInfo ? tokenInfo.token : '';
    }
    return options;
  }

  /**
   * 设置loading
   * @param type 类型
   * @param isShow 是否显示
   */
  private static setLoading(type: CaxiosType, isShow: boolean): void {
    if (type === CaxiosType.FullLoading || type === CaxiosType.FullLoadingToken) {
      store.commit(TYPES.SET_LOADING, { key: 'isFullLoading', value: isShow });
    }

    if (type === CaxiosType.PageLoading || type === CaxiosType.PageLoadingToken) {
      store.commit(TYPES.SET_LOADING, { key: 'isPageLoading', value: isShow });
    }
  }

  /**
   * axios调用
   * @param options 选项
   * @param type 类型
   */
  public static async invoke<T>(options: AxiosRequestConfig, type: CaxiosType = CaxiosType.Default): Promise<T> {
    if (!options) return Promise.reject('axios配置参数不可以为空');

    Caxios.setLoading(type, true);
    options = Caxios.setHeaders(options, type);

    let method = options.method || 'GET',
      instance = axios.create(Caxios.commonOptions);

    // 请求拦截器
    instance.interceptors.request.use(
      (request) => {
        if (isIE9 && method === 'POST') {
          request.data = JSON.stringify(request.data);
        }
        return request;
      },
      (err) => {
        Caxios.setLoading(type, false);
        return Promise.reject(err);
      }
    );

    // 响应拦截器
    instance.interceptors.response.use(
      (response) => {
        Caxios.setLoading(type, false);
        return response;
      },
      (err) => {
        let result = err;
        // 取消处理
        if (err instanceof axios.Cancel) {
          result = ''; // 返回空时，Prompt不提示
        }
        // 网络异常处理
        const errMsg = err.message || '';
        if (errMsg.indexOf('Network Error') > -1) {
          result = '网络异常，请稍后重试';
        } else if (errMsg.indexOf('timeout of') > -1) {
          result = '请求超时，请稍后重试';
        }
        Caxios.setLoading(type, false);
        return Promise.reject(result);
      }
    );

    options.cancelToken = new axios.CancelToken((cancel) => {
      window['cancelAxios'] = cancel;
    });

    // axios调用、处理响应数据
    let response = await instance.request(options);

    // 兼容IE9
    if (isIE9) {
      let request = response.request;
      if (request && request.responseType === 'json' && request.responseText) {
        response.data = JSON.parse(request.responseText);
      }
    }

    let resp = response.data;
    if (!resp) throw new BusinessError(999, '无效的响应数据');

    let result = new ResponseResult<T>(Number(resp.code), resp.data, resp.message);
    if (!result) throw new BusinessError(999, '无效的响应数据');

    let code: number = result.code,
      data: any = result.data,
      message: string = result.message,
      hash = window.location.hash;
    if (code === ResponseCode.Success) {
      // 成功
      return data as T;
    } else if (code === ResponseCode.TokenExpired) {
      // token失效
      Token.removeTokenInfo();
      store.commit(TYPES.CLEAR_STATES);

      // 登录页面，Router.push会报NavigatorDuplicated异常，提示在UI层处理
      let hash = window.location.hash;
      if (hash.indexOf('/login') < 0) {
        Prompt.error(message);
        Router.push({ path: '/login' });
        return Promise.reject('');
      } else {
        throw new BusinessError(code, message);
      }
    } else {
      // 其他异常
      throw new BusinessError(code, message);
    }
  }

  // GET方法请求
  public static async get<T>(options: AxiosRequestConfig, type: CaxiosType = CaxiosType.Default): Promise<T> {
    if (!options) return Promise.reject('axios配置参数不可以为空');

    options['method'] = 'GET';
    return await Caxios.invoke<T>(options, type);
  }

  // POST方法请求
  public static async post<T>(options: AxiosRequestConfig, type: CaxiosType = CaxiosType.Default): Promise<T> {
    if (!options) return Promise.reject('axios配置参数不可以为空');

    options['method'] = 'POST';
    return await Caxios.invoke<T>(options, type);
  }
}
