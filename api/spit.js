import request from '@/utils/request'
const groupName = 'spit'
const apiName = 'spit'
export default {
  search (page, size, searchMap) {
    return request({
      url: `/${groupName}/${apiName}/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  findById (id) {
    return request({
      url: `/${groupName}/${apiName}/${id}`,
      method: 'get'
    })
  },
  commentlist (id) {
    return request({
      url: `/${groupName}/${apiName}/commentlist/${id}`,
      method: 'get'
    })
  },
  thumbup (id) {
    return request({
      url: `/${groupName}/${apiName}/thumbup/${id}`,
      method: 'put'
    })
  },
  save (pojo) {
    return request({
      url: `/${groupName}/${apiName}`,
      method: 'post',
      data: pojo
    })
  }
}
