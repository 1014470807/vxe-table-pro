const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('@', resolve('src'))
    config.output
      .set('libraryExport', 'default')
      .set('library', 'VXETable')
    if (process.env.npm_lifecycle_event && process.env.npm_lifecycle_event.indexOf('lib') === 0) {
      const XEUtils = {
        root: 'XEUtils',
        commonjs: 'xe-utils',
        commonjs2: 'xe-utils',
        amd: 'xe-utils'
      }
      const VXETable = {
        root: 'VXETable',
        commonjs: 'vxe-table',
        commonjs2: 'vxe-table',
        amd: 'vxe-table'
      }
      if (config.has('externals')) {
        config.externals
          .set('xe-utils', XEUtils)
          .set('vxe-table', VXETable)
      } else {
        config
          .set('externals', {
            'xe-utils': XEUtils,
            'vxe-table': VXETable
          })
      }
    }
  }
}
