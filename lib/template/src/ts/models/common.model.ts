import { ResponseCode } from '../config';

// 业务型错误
export class BusinessError<T> implements Error {
    public code: number; // 错误码
    public message: string; // 错误消息
    public data?: T; // 错误数据
    public name: string; // 错误名称

    constructor(code: number, message: string, data?: T, name?: string) {
        this.code = code;
        this.message = message;
        this.data = data;
        this.name = name || '';
    }
}

// 响应结果
export class ResponseResult<T> {
    code: ResponseCode | number; // code码
    data: T; // 数据
    message: string; // 消息

    constructor(code: number, data: T, message: string) {
        this.code = code;
        this.data = data;
        this.message = message;
    }
}

// token信息
export class TokenInfo {
    public token: string; // token
    public username: string; // 用户名

    constructor(token: string, usrename: string) {
        this.token = token;
        this.username = usrename;
    }
}

// 分页结果
export class PageResult<T> {
    public totalCount: number; // 分页总数
    public list: Array<T>; // 分页数据列表

    constructor(totalCount: number, list: Array<T>) {
        this.totalCount = totalCount;
        this.list = list;
    }
}
