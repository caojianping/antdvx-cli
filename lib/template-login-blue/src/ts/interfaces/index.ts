// 下拉列表选项接口
export interface ISelectOption {
    label: string; // 标签
    value: string | number; // 数值
}

// 菜单选项接口
export interface IMenuOption {
    title: string;
    key?: string;
    icon?: string;
    path?: string;
    items?: Array<IMenuOption>;
}

// 分页参数接口
export interface IPageParameters<T> {
    conditions: T; // 分页查询条件
    pageNum: number; // 分页索引
    pageSize: number; // 分页尺寸
}
