import request from '@/utils/request'
const groupName = 'qa'
const apiName = 'problem'
export default {
  list (type, label, page, size) {
    return request({
      url: `/${groupName}/${apiName}/${type}/${label}/${page}/${size}`,
      method: 'get'
    })
  }

}
