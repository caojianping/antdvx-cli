import { TypeUtil } from './type.util';

/**
 * 构建参数字符串
 * @param parameters 参数
 */
function buildParameters(parameters: { [key: string]: any }): string {
    if (TypeUtil.isEmptyObject(parameters)) return '';

    let temp: Array<any> = [];
    for (let key in parameters) {
        let value = parameters[key];
        temp.push(`${key}=${String(value)}`);
    }
    return temp.join('&');
}

/**
 * 解析参数
 * @param key 参数key
 */
function resolveParameters(key: string): string {
    let regex = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i'),
        str = window.location.search || window.location.hash || '',
        flag = str.indexOf('?') + 1,
        matches = str.substr(flag).match(regex);
    if (!matches) return '';
    return unescape(matches[2]);
}

export const ParameterUtil = {
    buildParameters,
    resolveParameters
};
