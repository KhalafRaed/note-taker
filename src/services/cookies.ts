import Cookies from 'js-cookie'

const set = (key: string, value: string) => {
  Cookies.set(key, value)
}

const get = (key: string) => {
  return Cookies.get(key)
}

export default {
  set,
  get,
}
