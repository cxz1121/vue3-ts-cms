//规则
export const rules = {
  num: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '请输入11位手机号'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{4,}$/,
      message: '请输入验证码'
    }
  ]
}
