export const setSesstion = (key, value) => {
  if (sessionStorage.getItem(key)) {
    let data = getSesstion(key)
    sessionStorage.setItem(key, escape(JSON.stringify(Object.assign({}, data, value)).toString()))
  } else {
    sessionStorage.setItem(key, escape(JSON.stringify(value).toString()))
  }
}

export const getSesstion = (key) => {
  console.log(JSON.parse(unescape(sessionStorage.getItem(key))))
  return JSON.parse(unescape(sessionStorage.getItem(key))) || false
}
