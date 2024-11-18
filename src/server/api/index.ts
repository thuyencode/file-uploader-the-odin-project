import e from 'express'
import authRoutes from './auth'
import protectedRoutes from '@/server/api/(protected)'

const apiRoutes = e.Router()

apiRoutes.use('/auth', authRoutes)
apiRoutes.use(protectedRoutes)

export default apiRoutes
