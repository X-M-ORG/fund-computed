import axios from 'axios'

const service = axios.create({
  withCredentials: true,
  timeout: 10000
})

service.interceptors.response.use(
  (response) => response.data.data,
  (error) => {
    return Promise.reject(error)
  }
)

export default service
