<template>
  <div class="table-box">
    <el-table
        border
        :data="tableData"
        @select-all="changeSelectAll"
        @selection-change="changeSelection">
      <template v-for="(item, index) in tableColumn">
        <el-table-column
            v-if="item.type === 'selection'"
            :type="item.type"
            :align="'center'"
            :width="item.width||60"
        />
        <el-table-column
            v-else-if="item.type === 'button'"
            :align="'center'"
            :label="item.label"
            class-name="cell-button"
            :width="item.width||300"
        >
          <template slot-scope="scope">
            <template v-for="(btn_item,btn_index) in item.option">
              <el-button
                  style="width: 80px"
                  :type="btn_item.type"
                  @click="btn_item.evenClick(scope.$index,scope.row)">
                {{ btn_item.content }}
              </el-button>
            </template>
          </template>
        </el-table-column>
        <el-table-column
            v-else
            :label="item.label"
            :prop="item.prop"
            :width="item.width||null"
        >
          <template slot-scope="scope">
            <template v-if="!item.render">
              <span>{{ scope.row[item.prop] }}</span>
            </template>
            <template v-else>
              <expand-dom :row="scope.row"
                          :index="scope.$index"
                          :column="item"
                          :render="item.render"/>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <div style="display: flex; justify-content: center;align-item:center;">
      <el-pagination
          style="margin-top: 10px; margin-right: 0"
          layout="total, sizes, prev, pager, next, jumper"
          :total="paginationData.total"
          @current-change="changeIndexOrPage"
          @size-change="changeIndexOrPage"
          :current-page.sync="paginationData.pageIndex"
          :page-size.sync="paginationData.pageSize"
          :page-sizes="[5, 10, 15, 20]"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tablebox',
    components: {
      expandDom: {
        functional: true,
        props: {
          row: Object,
          render: Function,
          index: Number,
          column: {
            type: Object,
            default: () => {
              return null
            }
          }
        },
        render(h, ctx) {
          const params = {row: ctx.props.row, index: ctx.props.index}
          if (ctx.props.column) params.column = ctx.props.column
          return ctx.props.render(h, params)
        }
      }
    },
    props: {
      // 分页数据
      paginationData: {
        type: Object,
        default: () => {
        }
      },
      // 表格数据
      tableData: {
        type: Array,
        default: () => []
      },
      // 表格展示数据
      tableColumn: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      //全选的回调
      changeSelectAll(selection) {
        this.$emit('changeSelectAll', selection)
      },
      // 改变选中行的回调
      changeSelection(val) {
        this.$emit('changeSelection', val)
      },
      // 改变页码或者数量
      changeIndexOrPage() {
        this.$emit('changeIndexOrPage')
      },
    },
    mounted() {
      console.log(document.documentElement.clientHeight)
    }
  }
</script>
<style lang="less" scoped>
  /deep/ .cell-button {
    padding: 5px 0;
  }

  .table-box {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    height: 100%;
  }

  // 滚动条的宽度
  /deep/ .el-table__body-wrapper::-webkit-scrollbar {
    width: 6px; // 横向滚动条
    height: 6px; // 纵向滚动条 必写
  }

  // 滚动条的滑块
  /deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 3px;
  }
</style>
