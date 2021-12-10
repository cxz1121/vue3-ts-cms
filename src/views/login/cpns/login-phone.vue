<template>
  <div class="login-account">
    <el-form label-width="80px" :rules="rules" :model="phone">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'
export default defineComponent({
  components: {},
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })

    return {
      rules,
      phone
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;

  .get-btn {
    margin-left: 10px;
  }
}
</style>
