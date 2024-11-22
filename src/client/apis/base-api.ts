import axios from 'axios'
import { clientEnv } from '../libs/utils/env'

const baseApi = axios.create({
  baseURL: `http://localhost:${clientEnv.VITE_PORT}/api`
})

export default baseApi
