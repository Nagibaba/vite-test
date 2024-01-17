import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://reqres.in/api/',
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' },
})

axiosInstance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
    },
    function (error) {
        if (error.response.status === 400) {
            alert('logout')
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
