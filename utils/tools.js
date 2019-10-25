export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  const obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDay(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (const key in obj) {
    if (new RegExp(`(${key})`).test(fmt)) {
      const str = obj[key] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }

  return fmt
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
