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
    if (error.response.status === 401 && !error.config.url.includes('/login')) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
)

export default instance
