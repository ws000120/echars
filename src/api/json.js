import axios from '@/utils/request'

export const list = () => {
  return axios({
    url: 'static/list.json',
    method: 'get'
  })
}
