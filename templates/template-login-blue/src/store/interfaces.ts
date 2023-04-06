import { Commit } from 'vuex';
import { TokenInfo, LoginFormModel } from '@/shared/models';

export interface IActionContext<T> {
  commit: Commit;
  state: T;
  rootState: IRootState;
}

// 根状态接口
export interface IRootState {
  isFullLoading: boolean; // 是否启用全屏加载中UI
  isPageLoading: boolean; // 是否启用分页加载中UI
  pageSizeOptions: Array<string>; // 分页尺寸选项
  tokenInfo?: TokenInfo | null; // token信息
}

// 账户状态接口
export interface IAccountState {
  loginForm: LoginFormModel;
}
