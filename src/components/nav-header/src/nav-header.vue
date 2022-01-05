<template>
  <div class="header">
    <div class="content">
      <div class="left-content">
        <el-icon
          size="22"
          @click="handleFoldClick"
          :class="{ unfold: !isFold }"
        >
          <fold />
        </el-icon>
        <div class="breadcrumb">
          <nav-breadcrumb :breadcrumb="breadcrumb" />
        </div>
      </div>
      <div class="right-content">
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Fold } from '@element-plus/icons'
import UserInfo from './user-info.vue'
import NavBreadcrumb, { IBreadcurmb } from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { pathMapToBreadcrumb } from '@/utils/map-menus'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: {
    Fold,
    UserInfo,
    NavBreadcrumb
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(true)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const store = useStore()

    //breadcrumb
    const breadcrumb = computed(() => {
      const route = useRoute()
      const currentPath = route.path
      const userMenus = store.state.loginModule.userMenus
      return pathMapToBreadcrumb(userMenus, currentPath)
    })

    return {
      isFold,
      breadcrumb,
      handleFoldClick
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-content {
      display: flex;
      align-items: center;

      .el-icon {
        cursor: pointer;
      }

      .unfold {
        transform: rotate(180deg);
      }

      .breadcrumb {
        margin-left: 10px;
      }
    }
    .right-content {
      display: flex;
      align-items: center;

      .avatar {
        cursor: pointer;
      }
    }
  }
}
</style>
