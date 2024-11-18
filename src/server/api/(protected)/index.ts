import fileRoutes from '@/server/api/(protected)/files'
import e from 'express'
import { unauthedReqHandler } from '@/server/middlewares'

const protectedRoutes = e.Router()

protectedRoutes.use(unauthedReqHandler)
protectedRoutes.use('/files', fileRoutes)

export default protectedRoutes
