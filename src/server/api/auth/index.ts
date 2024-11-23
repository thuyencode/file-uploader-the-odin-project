import e from 'express'
import signInRoutes from './sign-in.route'
import signOutRoutes from './sign-out.route'
import signUpRoutes from './sign-up.route'
import statusRoutes from './status.route'

const authRoutes = e.Router()

authRoutes.use('/sign-up', signUpRoutes)
authRoutes.use('/sign-in', signInRoutes)
authRoutes.use('/status', statusRoutes)
authRoutes.use('/sign-out', signOutRoutes)

export default authRoutes
