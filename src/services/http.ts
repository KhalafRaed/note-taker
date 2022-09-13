import axios from 'axios'

const customAxios = axios.create({
  baseURL: 'http://maynon-local:8080',
})

export default customAxios
