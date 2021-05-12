import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  debug(code, ...message) {
    log.debug(code, message)
  },
  // Configure one or more authentication providers
  providers: [
    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_ID,
      clientSecret: process.env.LINKEDIN_SECRET,
      scope: ['r_liteprofile', 'r_emailaddress'],
    }),
  ],

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,
})
