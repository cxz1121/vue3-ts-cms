<template>
  <div class="cz-form">
    <el-form :label-width="labelWidth">
      <el-row class="infos">
        <el-col v-bind="colLayout" v-for="item in formItems" :key="item.label">
          <el-form-item :label="item.label" :style="itemStyle">
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
                v-bind="item.otherOptions"
                style="width: 100%; min-width: 200px"
                v-model="formData[`${item.field}`]"
              />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                :placeholder="item.placeholder"
                style="width: 100%; min-width: 200px"
                v-bind="item.otherOptions"
                v-model="formData[`${item.field}`]"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :label="option.label"
                  :value="option.value"
                ></el-option>
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker
                style="width: 100%; min-width: 200px"
                v-bind="item.otherOptions"
                v-model="formData[`${item.field}`]"
              ></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
        <!-- <el-col :span="8">
          <el-form-item label="密码">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="喜欢的运动">
            <el-select
              v-model="likeSport"
              placeholder="请选择"
              style="width: 100%"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col> -->
      </el-row>
      <slot name="footer"></slot>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: 0 })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 8,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    modelValue: {
      type: Object,
      require: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })

    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )

    return { formData }
  }
})
</script>

<style lang="less" scoped>
.infos {
  padding: 22px 50px 0 0;
}
</style>
