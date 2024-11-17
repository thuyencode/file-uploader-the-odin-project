import e from 'express'
import signInRoutes from './sign-in'
import signOutRoutes from './sign-out'
import signUpRoutes from './sign-up'
import statusRoutes from './status'

const authRoutes = e.Router()

authRoutes.use('/sign-up', signUpRoutes)
authRoutes.use('/sign-in', signInRoutes)
authRoutes.use('/status', statusRoutes)
authRoutes.use('/sign-out', signOutRoutes)

export default authRoutes
