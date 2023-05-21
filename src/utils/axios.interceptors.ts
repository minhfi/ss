import axios from 'axios'
import { networkInterceptor } from './axios.interceptor.network'

axios.interceptors.request.use(networkInterceptor)
