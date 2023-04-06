module.exports = {
  publicPath: './',
  lintOnSave: false,
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
  transpileDependencies: ['ant-design-vue'],
  devServer: {
    port: 9000,
    https: false,
    open: true,
  },
};
