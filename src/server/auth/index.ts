import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { magicLink } from "better-auth/plugins"

import { env } from "@/env"
import { db } from "@/server/db"
import { sendMagicLink } from "./send-magic-link"
import { MAGIC_LINK_EXPIRATION } from "@/lib/constants"
import * as schema from "@/server/db/schema/auth"

export const auth = betterAuth({
  trustedOrigins: [env.NEXT_PUBLIC_URL],
  baseURL: env.NEXT_PUBLIC_URL,
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema
  }),
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    },
    github: {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    }
  },
  user: {
    additionalFields: {
      interests: {
        type: "string[]",
        required: true,
        default: []
      }
    }
  },
  plugins: [
    magicLink({
      sendMagicLink,
      expiresIn: MAGIC_LINK_EXPIRATION * 60 // in seconds
    })
  ]
})
