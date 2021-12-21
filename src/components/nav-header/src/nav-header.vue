<template>
  <div class="header">
    <el-icon size="22" @click="handleFoldClick" :class="{ unfold: !isFold }">
      <fold />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold } from '@element-plus/icons'

export default defineComponent({
  components: {
    Fold
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(true)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  .el-icon {
    cursor: pointer;
  }

  .unfold {
    transform: rotate(180deg);
  }
}
</style>
