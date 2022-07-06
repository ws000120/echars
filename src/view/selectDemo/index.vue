<template>
  <div>
    <el-select v-model="value" ref="selectRef" placeholder="请选择" popper-class="ws_select_customize"
               @visible-change="visibleChange" @change="selectChange">
      <el-option
          v-for="(item,index) in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span class="ws_icon_default ws_icon-hover" @click.stop="delClick(index)">
          <i class="el-icon-delete"></i></span>
      </el-option>
      <div style="position: sticky">
        <el-row :gutter="3" class="ws_input_customize ws_input_customize_display">
          <el-col :span="15">
            <el-input placeholder="请输入内容" v-model="inputValue"></el-input>
          </el-col>
          <el-col :span="8" class="ws_button_col">
            <el-button class="ws_button" size="small" type="primary" @click="handlerAdd">添加</el-button>
          </el-col>
        </el-row>
      </div>
    </el-select>

  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Shenzhen1',
          label: '深圳1'
        }, {
          value: 'Shenzhen2',
          label: '深圳2'
        }, {
          value: 'Shenzhen3',
          label: '深圳3'
        }, {
          value: 'Shenzhen4',
          label: '深圳4'
        }, {
          value: 'Shenzhen5',
          label: '深圳5'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: '',
        inputValue: '',
      }
    },
    methods: {
      // 添加 操作
      handlerAdd() {
        this.inputValue = String(this.inputValue).trim();
        if (this.inputValue === null || this.inputValue.length === 0 || this.inputValue === '') {
          this.$message('内容不能为空')
          return
        }
        this.$emit('add-data', this.inputValue)
      },
      selectChange(value) {
        console.log(value)
      },
      delClick(index) {
        this.cities.splice(index, 1);
        this.visibleChange(true, true)
        let delete_data = JSON.parse(JSON.stringify(this.cities[index]))
        // 点击删除 触发
        // 返回 当前选中的数据
        this.$emit('delete-data', delete_data)
      },
      // 确定 输入框的位置
      visibleChange(flag, delFlag = false) {
        // 获取下拉框的高度
        let height = $('.ws_select_customize').height();
        // 获取 input 元素
        let inputCustom = $('.ws_input_customize');
        if (flag) {
          if (height !== undefined || height !== null || height !== 0) {
            let inputHeight = height;
            if (height < 255) {
              inputHeight += 105
            } else {
              inputHeight += 140
            }
            inputCustom.css('position', 'fixed');
            if (!delFlag) {
              inputCustom.toggleClass('ws_input_customize_display')
            }
            inputCustom.animate({top: inputHeight + 'px'}, 0);
          }
        } else {
          inputCustom.toggleClass('ws_input_customize_display')
        }
      }
    },
    mounted() {
    },
  }
</script>

<style lang='less' scoped>
  .ws_input_customize_display {
    display: none;
  }

  .ws_icon-hover:hover {
    color: #ec0000;
  }

  .ws_icon_default {
    color: #8492a6;
    float: right;
    font-size: 13px;
    width: 25px;
    text-align: center;
  }

  .ws_input_customize {
    width: 216px;
    padding: 0 10px;

    .ws_button_col {
      line-height: 36px;

      .ws_button {
        width: 65px !important;
      }
    }
  }

</style>
