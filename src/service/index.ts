import XZRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const xzRequest = new XZRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default xzRequest
