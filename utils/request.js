import axios from 'axios'
import { getUser } from '@/utils/auth'
// 创建axios实例

const request = axios.create({
  baseURL: 'http://localhost:9012/', // api的base_url
  timeout: 20000, // 请求超时时间
  headers: { 'Authorization': 'Bearer ' + getUser().token }
})
const requestF = axios.create({
  baseURL: 'http://localhost:9012/', // api的base_url
  timeout: 20000, // 请求超时时间
  headers: { 'Authorization': 'Bearer ' + getUser().token }
})
export { request, requestF }
