import { Commit } from 'vuex';
import { TokenInfo, DemoModel } from '@/ts/models';

export interface IActionContext<T> {
    commit: Commit;
    state: T;
    rootState: IRootState;
}

// 根状态接口
export interface IRootState {
    tokenInfo?: TokenInfo | null; // token信息
    isFullLoading: boolean; // 是否启用全屏加载中UI
    isPageLoading: boolean; // 是否启用分页加载中UI
    pageSizeOptions: Array<string>; // 分页尺寸选项
}

// 示例状态接口
export interface IDemoState {
    demo?: DemoModel | null;
}
