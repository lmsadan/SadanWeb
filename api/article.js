import { request } from '@/utils/request'
const groupName = 'article'
const apiName = 'article'
export default {
  getList () {
    return request({
      url: `/${groupName}/${apiName}`,
      method: 'get'
    })
  }

}
