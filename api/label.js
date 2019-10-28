import { request } from '@/utils/request'
const groupName = 'base'
const apiName = 'label'
export default {
  topList () {
    return request({
      url: `/${groupName}/${apiName}`,
      method: 'get'
    })
  }

}
