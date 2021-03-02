<template>
  <div class="demo-view">

    <div style="width: 1000px;margin: 0 auto;">
      <vxe-grid v-bind="gridOptions" :data="tableData"></vxe-grid>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { a: 'test1', b: '12', c: '11', d: '6', e: '3', f: '1', g: 3, h: '2', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test2', b: '6', c: '2', d: '8', e: '5', f: '3', g: 12, h: '3', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test3', b: '12', c: '1', d: '1', e: '5', f: '1', g: 24, h: '5', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test4', b: '4', c: '20', d: '11', e: '1', f: '2', g: 17, h: '14', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test5', b: '12', c: '2', d: '7', e: '6', f: '12', g: 4, h: '7', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test6', b: '3', c: '3', d: '11', e: '8', f: '2', g: 2, h: '8', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test7', b: '32', c: '2', d: '5', e: '2', f: '3', g: 1, h: '9', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test8', b: '4', c: '2', d: '9', e: '7', f: '2', g: 5, h: '24', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test9', b: '9', c: '12', d: '1', e: '2', f: '2', g: 6, h: '5', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test10', b: '5', c: '9', d: '15', e: '2', f: '3', g: 8, h: '15', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test11', b: '45', c: '8', d: '3', e: '4', f: '6', g: 7, h: '0', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test12', b: '4', c: '7', d: '1', e: '2', f: '4', g: 2, h: '1', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test13', b: '1', c: '1', d: '4', e: '1', f: '3', g: 98, h: '21', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test14', b: '45', c: '11', d: '8', e: '6', f: '2', g: 8, h: '', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test15', b: '9', c: '4', d: '2', e: '7', f: '5', g: 6, h: '0', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test16', b: '4', c: '3', d: '7', e: '7', f: '6', g: null, h: '21', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test17', b: '12', c: '4', d: '8', e: '4', f: '2', g: 8, h: '', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test18', b: '5', c: '6', d: '19', e: '9', f: '1', g: 10, h: '10', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test19', b: '4', c: '8', d: '2', e: '8', f: '2', g: null, h: '7', i: '', j: '', k: '', l: '', m: '', n: '' },
        { a: 'test20', b: '1', c: '6', d: '5', e: '7', f: '6', g: 55, h: '11', i: '', j: '', k: '', l: '', m: '', n: '' }
      ],
      gridOptions: {
        border: true,
        resizable: true,
        autoResize: true,
        keepSource: true,
        showOverflow: true,
        height: 500,
        mouseConfig: {
          area: true, // 是否开启单元格区域选取
          extension: true // 是否开启右下角延伸按钮
        },
        keyboardConfig: {
          isClip: true, // 是否开启复制粘贴功能
          isEdit: true, // 是否开启单元格选择编辑
          isTab: true, // 是否开启TAB键左右移动功能
          isArrow: true, // 是否开启非编辑状态下，上下左右移动功能
          isEnter: true, // 是否开启回车移动上下行移动
          isDel: true, // 是否开启删除键功能
          isMerge: true, // 是否开合并和取消合并功能
          isFNR: true, // 是否开启查找和替换功能
          isChecked: true, // 是否开启空格键切换复选框和单选框状态
          enterToTab: false // 是否将回车键行为改成 Tab 键行为
        },
        editConfig: {
          trigger: 'dblclick',
          mode: 'cell',
          showStatus: true
        },
        columns: [
          { type: 'seq', width: 60 },
          { field: 'a', title: 'A2', width: 120, editRender: { name: 'input' } },
          { field: 'b', title: 'B2', width: 180, editRender: { name: 'input' } },
          { field: 'c', title: 'C2', width: 200, editRender: { name: 'input' } },
          { field: 'd', title: 'D2', width: 160, editRender: { name: 'input' } },
          { field: 'e', title: 'E2', width: 100, editRender: { name: 'input' } },
          { field: 'f', title: 'F2', width: 140, editRender: { name: 'input' } },
          { field: 'g', title: 'G2', width: 160, editRender: { name: 'input' } },
          { field: 'h', title: 'H2', width: 120, editRender: { name: 'input' } },
          { field: 'i', title: 'I2', width: 200, editRender: { name: 'input' } },
          { field: 'j', title: 'J2', width: 100, editRender: { name: 'input' } },
          { field: 'k', title: 'K2', width: 160, editRender: { name: 'input' } },
          { field: 'l', title: 'L2', width: 100, editRender: { name: 'input' } },
          { field: 'm', title: 'M2', width: 120, editRender: { name: 'input' } },
          { field: 'n', title: 'N2', width: 180, editRender: { name: 'input' } }
        ],
        menuConfig: {
          body: {
            options: [
              [
                { code: 'CLEAR_CELL', name: '清除内容 (Del)' },
                { code: 'COPY_CELL', name: '复制 (Ctrl+C)', prefixIcon: 'fa fa-copy' },
                { code: 'CUT_CELL', name: '剪贴 (Ctrl+X)', prefixIcon: 'fa fa-cut' },
                { code: 'PASTE_CELL', name: '粘贴 (Ctrl+V)', prefixIcon: 'fa fa-paste' }
              ],
              [
                { code: 'OPEN_FIND', name: '查找 (Ctrl+F)' },
                { code: 'OPEN_REPLACE', name: '替换 (Ctrl+H)' },
                { code: 'MERGE_OR_CLEAR', name: '合并/取消 (Ctrl+M)', prefixIcon: 'fa fa-columns' }
              ],
              [
                { code: 'INSERT_AT_ROW', name: '新增' },
                { code: 'DELETE_ROW', name: '删除' }
              ],
              [
                {
                  name: '排序',
                  children: [
                    { code: 'CLEAR_SORT', name: '清除排序' },
                    { code: 'SORT_ASC', name: '升序', prefixIcon: 'fa fa-sort-alpha-asc' },
                    { code: 'SORT_DESC', name: '倒序', prefixIcon: 'fa fa-sort-alpha-desc' }
                  ]
                }
              ],
              [
                {
                  name: '创建图表',
                  prefixIcon: 'fa fa-area-chart',
                  children: [
                    { code: 'CHART_BAR_X_AXIS', name: '横向柱状图 - 自由选择', prefixIcon: 'fa fa-bar-chart' },
                    { code: 'CHART_BAR_X_AXIS', name: '横向柱状图 - 固定类别', prefixIcon: 'fa fa-bar-chart', params: { category: 'a' } },
                    { code: 'CHART_BAR_Y_AXIS', name: '纵向柱状图 - 自由选择', prefixIcon: 'fa fa-bar-chart' },
                    { code: 'CHART_BAR_Y_AXIS', name: '纵向柱状图 - 固定类别', prefixIcon: 'fa fa-bar-chart', params: { category: 'a' } },
                    { code: 'CHART_LINE', name: '折线图 - 自由选择', prefixIcon: 'fa fa-line-chart' },
                    { code: 'CHART_LINE', name: '折线图 - 固定类别', prefixIcon: 'fa fa-line-chart', params: { category: 'a' } },
                    { code: 'CHART_PIE', name: '饼图 - 自由选择', prefixIcon: 'fa fa-pie-chart' },
                    { code: 'CHART_PIE', name: '饼图 - 固定类别', prefixIcon: 'fa fa-pie-chart', params: { category: 'a' } }
                  ]
                }
              ], [
                { code: 'PRINT_ALL', name: '打印', prefixIcon: 'fa fa-print', params: { columns: ['a', 'b', 'c', 'd', 'e'] } },
                { code: 'EXPORT_ALL', name: '导出', prefixIcon: 'fa fa-download', params: { filename: '导出数据', type: 'csv' } }
              ]
            ]
          }
        }
      }
    }
  },
  created () {
    // const list = []
    // for (let index = 0; index < 1000; index++) {
    //   list.push(
    //     { a: 'a', b: 'rewr' + index, c: 100000 + index, d: '546', e: 'lkjl' + index, f: '', g: 10000 + index, h: 'd', i: '', j: '', k: '', l: '', m: '', n: '' }
    //   )
    // }
    // this.tableData = list
  }
}
</script>
