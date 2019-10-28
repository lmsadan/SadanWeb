import { request } from '@/utils/request'
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
  commentList (parentId, page, size) {
    return request({
      url: `/${groupName}/${apiName}/comment/${parentId}/${page}/${size}`,
      method: 'get'
    })
  },
  thumbup (textId, userId) {
    return request({
      url: `/${groupName}/${apiName}/thumbup/${textId}`,
      method: 'put',
      data: { userId }
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
