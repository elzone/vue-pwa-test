const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "My App",
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  },
  publicPath: './',

  chainWebpack: config => {
    // Добавляем поддержку coffee script с обработчкой через babel
    config.resolve.extensions.add('.coffee')

    config.module
      .rule('coffee')
      .test(/\.coffee$/)
      .use('babel-loader')
      .loader('babel-loader').end()
      .use('coffee-loader')
      .loader('coffee-loader').end()

  },
});
