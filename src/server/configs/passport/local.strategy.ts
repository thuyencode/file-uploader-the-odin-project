import { UserDB } from '@/server/db/user.db'
import { BadRequest } from '@/server/errors'
import { verifyPassword } from '@/server/utils/password'
import { omit } from '@std/collections'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

passport.serializeUser<Express.User['id']>((user, done) => {
  done(null, user.id)
})

passport.deserializeUser<Express.User['id']>(async (id, done) => {
  try {
    const user = await UserDB.findById(id)

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
      const user = await UserDB.findByUsername(username)

      if (!user) {
        return done(new BadRequest(`Username '${username}' not found`), false)
      }

      const isPasswordCorrect = await verifyPassword(password, user.salted_hash)

      if (!isPasswordCorrect) {
        return done(new BadRequest('Wrong password'), false)
      }

      done(null, omit(user, ['salted_hash']))
    } catch (error) {
      done(error, false)
    }
  })
)
