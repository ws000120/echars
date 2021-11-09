const webpack = require('webpack')
module.exports = {
  devServer: {
    hot: true,//自动保存
    open: true,//自动启动
    port: 8080,//默认端口号
    host: "0.0.0.0"
  },
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
    config.plugin('html')
        .tap(args => {
          args[0].title = '数据可视化'
          return args
        })
  }
}
