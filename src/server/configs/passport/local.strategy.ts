import { UserDB } from '@/server/db/user.db'
import { BadRequest } from '@/server/errors'
import { verifyPassword } from '@/server/utils/password'
import { omit } from '@std/collections'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

passport.serializeUser<Express.User['id']>((user, done) => {
  done(null, user.id)
})

passport.deserializeUser<Express.User['id']>((id, done) => {
  UserDB.findById(id)
    .then((user) => {
      if (user == null) {
        throw new Error(`User with ID "${id}" not found`)
      }

      done(null, omit(user, ['salted_hash']))
    })
    .catch((error) => {
      done(error, false)
    })
})

export default passport.use(
  new LocalStrategy((username, password, done) => {
    UserDB.findByUsername(username)
      .then(async (user) => {
        if (user == null) {
          done(new BadRequest(`Username '${username}' not found`), false)
          return
        }

        const isPasswordCorrect = await verifyPassword(
          password,
          user.salted_hash
        )

        if (!isPasswordCorrect) {
          done(new BadRequest('Wrong password'), false)
          return
        }

        done(null, omit(user, ['salted_hash']))
      })
      .catch((error) => {
        done(error, false)
      })
  })
)
