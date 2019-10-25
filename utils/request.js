import axios from 'axios'
// import { getUser } from '@/utils/auth'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://192.168.1.104:9012/', // api的base_url
  timeout: 30000 // 请求超时时间
  // eslint-disable-next-line no-irregular-whitespace
  // headers: { 'Authorization': 'Bearer ' + getUser().token }
})
export default service
