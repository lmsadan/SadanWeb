import request from '@/utils/request'
const groupName = 'recruit'
const apiName = 'enterprise'
export default {
  getList () {
    return request({
      url: `/${groupName}/${apiName}`,
      method: 'get'
    })
  },
  search (page, size, searchMap) {
    return request({
      url: `/${groupName}/${apiName}/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  save (pojo) {
    return request({
      url: `/${groupName}/${apiName}`,
      method: 'post',
      data: pojo
    })
  },
  findById (id) {
    return request({
      url: `/${groupName}/${apiName}/${id}`,
      method: 'get'
    })
  },
  update (id, pojo) {
    if (id === null || id === '') {
      return this.save(pojo)
    }
    return request({
      url: `/${groupName}/${apiName}/${id}`,
      method: 'put',
      data: pojo
    })
  },
  deleteById (id) {
    return request({
      url: `/${groupName}/${apiName}/${id}`,
      method: 'delete'
    })
  },
  hotList () {
    return request({
      url: `/${groupName}/${apiName}/search/hotList`,
      method: 'get'
    })
  }
}
