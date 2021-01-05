const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
  },
  lintOnSave: false
}
