import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': '*/*',
  },
})



instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    console.log("ocoreu um erro na api", error)
    return Promise.reject(error)
  },
)

export default instance
