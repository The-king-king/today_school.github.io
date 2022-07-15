import axios from 'axios'

export const baseUrl='https://www.fastmock.site/mock/b5c0ca9f1fa672b811e5a28a700073e7/address'
const axiosInstance =axios.create({
    baseURL:baseUrl
})

export { axiosInstance }