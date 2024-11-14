import { findUserById, findUserByUsername } from '@/server/db/user.db'
import { verifyPassword } from '@/server/utils/password'
import { omit } from '@std/collections/omit'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

passport.serializeUser<Express.User['id']>((user, done) => {
  done(null, user.id)
})

passport.deserializeUser<Express.User['id']>(async (id, done) => {
  try {
    const user = await findUserById(id)

    if (!user) {
      throw new Error(`User with ID "${id}" not found`)
    }

    done(null, omit(user, ['salted_hash']))
  } catch (error) {
    done(error, false)
  }
})

export default passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await findUserByUsername(username)

      if (!user) {
        throw new Error(`User '${username}' not found`)
      }

      const isPasswordCorrect = await verifyPassword(password, user.salted_hash)

      if (!isPasswordCorrect) {
        throw new Error('Wrong password')
      }

      done(null, omit(user, ['salted_hash']))
    } catch (error) {
      done(error, false)
    }
  })
)
