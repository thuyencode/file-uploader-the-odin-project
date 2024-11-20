import e from 'express'
import authRoutes from './auth'
import fileRoutes from './files'

const apiRoutes = e.Router()

apiRoutes.use('/auth', authRoutes)
apiRoutes.use('/files', fileRoutes)

export default apiRoutes
