import request from '@/utils/request'
const groupName = 'user'
const apiName = 'user'
export default {
  sendsms (mobile) {
    return request({
      url: `/${groupName}/${apiName}/sendsms/${mobile}`,
      method: 'put'
    })
  },
  register (user, code) {
    return request({
      url: `/${groupName}/${apiName}/register/${code}`,
      method: 'post'
    })
  },
  login (mobile, password) {
    return request({
      url: `/${groupName}/${apiName}/login`,
      method: 'post',
      data: {
        mobile,
        password
      }
    })
  },
  info () {
    return request({
      url: `/${groupName}/${apiName}/info`,
      method: 'get'
    })
  },
  saveinfo (user) {
    return request({
      url: `/${groupName}/${apiName}/saveinfo`,
      method: 'put',
      data: user
    })
  }
}
