import Cookies from 'js-cookie'
const Token = 'User-Token'
const Nickname = 'User-Name'
const Image = 'User-Image'
const Id = 'User-Id'

export function setUser (msg) {
  Cookies.set(Token, msg.token)
  Cookies.set(Nickname, msg.nickname)
  Cookies.set(Image, msg.image)
  Cookies.set(Id, msg.id)
}

export function getUser () {
  return {
    token: Cookies.get(Token),
    nickname: Cookies.get(Nickname),
    image: Cookies.get(Image),
    id: Cookies.get(Id)
  }
}

export function removeUser () {
  Cookies.remove(Token)
  Cookies.remove(Nickname)
  Cookies.remove(Image)
  Cookies.remove(Id)
}
