import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.17.8.109:3333'
})

export default api