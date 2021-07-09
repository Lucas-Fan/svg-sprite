const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    open: true,
    port: 2020,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  publicPath: './',
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      },
      extensions: ['.js', '.vue', '.scss', '.css', '.json']
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'svg-sprite'
      return args
    })
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assests/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assests/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'fe-icon-[name]'
      })
      .end()
  }
}
