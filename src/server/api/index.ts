import e from 'express'
import auth_routes from './auth'

const api_routes = e.Router()

api_routes.use('/auth', auth_routes)

export default api_routes
