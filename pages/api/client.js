import axios from 'axios'

const client = axios.create({
  baseURL: 'http://localhost:1717/api',
})

export default client
