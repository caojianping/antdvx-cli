// axios类型
export const enum CaxiosType {
    Default = 0, // 默认
    FullLoading = 1, // 全屏加载
    PageLoading = 2, // 分页加载
    FullLoadingToken = 3, // 全屏加载、token
    PageLoadingToken = 4, // 分页加载、token
    Token = 5 // token
}

// 响应码
export const enum ResponseCode {
    Success = 0, // 请求成功
    SecondVerify = 10, // 二次验证
    GoogleAuth = 20, // 谷歌认证
    TokenExpired = 30 // token过期
}
