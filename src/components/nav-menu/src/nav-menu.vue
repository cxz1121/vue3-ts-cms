<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="" />
      <span class="title">Vue3+Ts</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <template v-for="subItem in item.children" :key="subItem.id">
            <el-sub-menu>
              <el-icon><icon-menu /></el-icon>
              <span>{{ subItem.name }}</span>
            </el-sub-menu>
          </template>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item>
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
import { Location, Menu as IconMenu } from '@element-plus/icons'
import { useStore } from '@/store'

export default defineComponent({
  components: {
    Location,
    IconMenu
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.loginModule.userMenus)

    console.log(userMenus)

    return {
      userMenus
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
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 0 0 15px;
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
}
</style>
