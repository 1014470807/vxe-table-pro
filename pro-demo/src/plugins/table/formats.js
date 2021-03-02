import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'

/**
 * 格式化单元格
 */
VXETable.formats.mixin({
  formatDate ({ cellValue }, format) {
    return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')
  }
})
