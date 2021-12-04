<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="tab-item">
            <el-icon size=""><avatar /></el-icon> 账号登录
          </span>
        </template>
        <login-account />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="tab-item">
            <el-icon size=""><iphone /></el-icon> 验证码登录
          </span>
        </template>
        验证码登录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar, Iphone } from '@element-plus/icons'
import LoginAccount from './login-account.vue'
export default defineComponent({
  components: {
    LoginAccount,
    Avatar,
    Iphone
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
}
.tab-item {
  display: flex;
  align-items: center;
  justify-content: center;

  .el-icon {
    margin-right: 3px;
  }
}
</style>
