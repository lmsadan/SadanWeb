import request from '@/utils/request'
const groupName = 'base'
const apiName = 'label'
export default {
  toplist () {
    return request({
      url: `/${groupName}/${apiName}/toplist`,
      method: 'get'
    })
  }

}
