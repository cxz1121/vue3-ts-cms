<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" />
      <span class="title" v-show="isCollapse">Vue3+Ts</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="!isCollapse"
      :collapse-transition="false"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="`${item.id}`">
            <template #title>
              <el-icon><icon-menu /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <!-- <template
                v-if="subItem.children && subItem.children.length !== 0"
              > -->
              <template v-if="subItem.type === 1">
                <el-sub-menu :index="`${subItem.id}`">
                  <template #title>
                    <el-icon><tickets /></el-icon>
                    <span>{{ subItem.name }}</span>
                  </template>
                  <template
                    v-for="grandItem in subItem.children"
                    :key="grandItem.id"
                  >
                    <el-menu-item
                      :index="`${grandItem.id}`"
                      @click="handleMenuItemClick(grandItem)"
                    >
                      <el-icon><location /></el-icon>
                      <span>{{ grandItem.name }}</span>
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
              <!-- <template
                v-if="!subItem.children || subItem.children.length == 0"
              > -->
              <template v-if="subItem.type === 2">
                <el-menu-item
                  :index="`${subItem.id}`"
                  @click="handleMenuItemClick(subItem)"
                >
                  <el-icon><tickets /></el-icon>
                  <span>{{ subItem.name }}</span>
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item
            :index="`${item.id}`"
            @click="handleMenuItemClick(item)"
          >
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Tickets, Location, Menu as IconMenu } from '@element-plus/icons'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    Tickets,
    Location,
    IconMenu
  },
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.loginModule.userMenus)

    const router = useRouter()
    const handleMenuItemClick = (item: any) => {
      router.push(item.url ?? '/not-found')
    }
    return {
      userMenus,
      handleMenuItemClick
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 18px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  .el-menu-item {
    background-color: #0c2135 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
    background-color: rgba(10, 96, 189, 0.5) !important;
  }

  ::v-deep(.el-sub-menu__title:hover) {
    color: #fff !important; // 菜单
    background-color: unset;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
    // background-color: rgba(72, 61, 139, 0.3) !important;
  }
}
</style>
