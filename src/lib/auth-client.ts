import { createAuthClient } from "better-auth/client"
import { magicLinkClient } from "better-auth/client/plugins"
import { inferAdditionalFields } from "better-auth/client/plugins"

import { type auth } from "@/server/auth"

export const authClient = createAuthClient({
  plugins: [magicLinkClient(), inferAdditionalFields<typeof auth>()]
})
