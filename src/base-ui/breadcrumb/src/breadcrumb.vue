<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumb" :key="item.name">
        <el-breadcrumb-item>
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IBreadcurmb } from '../types'

export default defineComponent({
  props: {
    breadcrumb: {
      type: Array as PropType<IBreadcurmb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
