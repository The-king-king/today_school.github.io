import{ axiosInstance } from './config'

export const getContextData = () => axiosInstance.get('/comments')

export const getContextQue = () => axiosInstance.get('/questions')

export const getContextTopic = () => axiosInstance.get('/topic')
