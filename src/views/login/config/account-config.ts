//规则
export const rules = {
  name: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,11}$/,
      message: '用户名必须是5~11个字母或数字'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '用户名必须是6位以上字母或数字'
    }
  ]
}
