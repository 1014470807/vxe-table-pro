<template>
  <div class="demo-view">

    <div style="width: 1000px;margin: 0 auto;">
      <vxe-table
        border
        resizable
        autoResize
        keepSource
        showOverflow
        height="500"
        :mouse-config="{area: true, extension: true}"
        :keyboard-config="{isClip: true, isEdit: true, isTab: true, isArrow: true, isEnter: true, isDel: true, isMerge: true, isFNR: true, isChecked: true}"
        :edit-config="{trigger: 'dblclick', mode: 'cell', showStatus: true}"
        :menu-config="tableMenu"
        :data="tableData">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="a" title="A1" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="b" title="B1" width="120" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="c" title="C1" width="140" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="d" title="D1" width="200" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="e" title="E1" width="200" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="f" title="F1" width="160" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="g" title="G1" width="160" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="h" title="H1" width="120" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="i" title="I1" width="160" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="j" title="J1" width="200" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="k" title="K1" width="140" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="l" title="L1" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="m" title="M1" width="180" :edit-render="{name: 'input'}"></vxe-table-column>
        <vxe-table-column field="n" title="N1" width="120" :edit-render="{name: 'input'}"></vxe-table-column>
      </vxe-table>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tableMenu: {
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
      },
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
        { a: 'test10', b: '5', c: '9', d: '15', e: '2', f: '3', g: 8, h: '15', i: '', j: '', k: '', l: '', m: '', n: '' }
      ]
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
