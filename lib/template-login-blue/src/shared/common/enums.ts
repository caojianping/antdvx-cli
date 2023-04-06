// axios类型
export const enum CaxiosType {
  Default = 0, // 默认
  FullLoading = 1, // 全屏加载
  PageLoading = 2, // 分页加载
  FullLoadingToken = 3, // 全屏加载、token
  PageLoadingToken = 4, // 分页加载、token
  Token = 5, // token
}

// 响应码
export const enum ResponseCode {
  Success = 0, // 请求成功
  TokenExpired = 400, // token过期
}
