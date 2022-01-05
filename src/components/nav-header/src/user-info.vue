<template>
  <div>
    <el-dropdown placement="bottom-start">
      <div>
        <el-avatar
          class="avatar"
          :size="32"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item style="border-bottom: 1px solid #f8f8f9">
            用户信息
          </el-dropdown-item>
          <el-dropdown-item
            style="border-bottom: 1px solid #f8f8f9; padding: 2px 20px"
          >
            修改密码
          </el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
