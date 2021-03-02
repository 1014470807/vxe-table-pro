import Vue from 'vue'
import XEClipboard from 'xe-clipboard'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import './pro/vxe-table-pro.es6.min'
import './pro/vxe-table-pro.min.css'
import './defaults'

import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/legendScroll'

import VXETablePluginMenus from 'vxe-table-plugin-menus'
import VXETablePluginCharts from 'vxe-table-plugin-charts'
import 'vxe-table-plugin-charts/dist/style.css'

Vue.use(VXETable)

// 给右键菜单的复制按钮设置为剪贴板操作函数
VXETable.use(VXETablePluginMenus, {
  copy: XEClipboard.copy
})
VXETable.use(VXETablePluginCharts)
