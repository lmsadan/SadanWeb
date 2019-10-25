import axios from 'axios'
export default {
  getAccessToken (code) {
    return axios.get(`http://localhost:8888/?operation=token&code=${code}`)
  },
  getUserinfo (accessToken, openId) {
    return axios.get(`http://localhost:8888/?operation=userinfo&access_token=${accessToken}&openid=${openId}`)
  }
}
