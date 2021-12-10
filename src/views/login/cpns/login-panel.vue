<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="tab-item">
            <el-icon size=""><avatar /></el-icon> 账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="tab-item">
            <el-icon size=""><iphone /></el-icon> 手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control" v-show="isAccountTab">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      type="primary"
      class="login-now"
      :style="isAccountTab || 'margin-top: 5px'"
      @click="handleLoginClick"
    >
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Avatar, Iphone } from '@element-plus/icons'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone,
    Avatar,
    Iphone
  },
  setup() {
    //1定义属性
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')
    //是否是account登录
    const isAccountTab = computed(() => {
      return currentTab.value == 'account'
    })
    //2定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('phoneLogin')
      }
    }
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      isAccountTab,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;

  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .login-now {
    width: 100%;
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
