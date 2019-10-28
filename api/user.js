import { requestF } from '@/utils/request'
const groupName = 'user'
const apiName = 'user'

export default {
  sendsms (mobile) {
    return requestF({
      url: `/${groupName}/${apiName}/sendsms/${mobile}`,
      method: 'post'
    })
  },
  register (user, code) {
    return requestF({
      url: `/${groupName}/${apiName}/register/${code}`,
      method: 'post',
      data: {
        mobile: user.mobile,
        password: user.password,
        nickname: user.nickname
      }
    })
  },
  login (mobile, password) {
    return requestF({
      url: `/${groupName}/${apiName}/login`,
      method: 'post',
      data: {
        mobile,
        password
      }
    })
  },
  info () {
    return requestF({
      url: `/${groupName}/${apiName}/info`,
      method: 'get'
    })
  },
  saveinfo (user) {
    return requestF({
      url: `/${groupName}/${apiName}/saveinfo`,
      method: 'put',
      data: user
    })
  }
}
