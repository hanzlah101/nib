import { eq } from "drizzle-orm"

import { db } from "@/server/db"
import { users } from "@/server/db/schema/auth"
import { sendMail } from "@/lib/send-mail"
import MagicLinkEmail from "@emails/magic-link-email"

export async function sendMagicLink({
  email,
  url
}: {
  email: string
  url: string
}) {
  const [user] = await db.select({}).from(users).where(eq(users.email, email))

  const updatedUrl = new URL(url)
  const isNewUser = !user
  const prevCallbackURL = updatedUrl.searchParams.get("callbackURL")
  if (isNewUser) {
    updatedUrl.searchParams.set("callbackURL", "/onboarding")
    if (prevCallbackURL) {
      updatedUrl.searchParams.set("afterOnboarding", prevCallbackURL)
    }
  }

  await sendMail({
    to: email,
    subject: isNewUser ? "Welcome to NIB" : "Confirm your email",
    react: MagicLinkEmail({ magicLink: updatedUrl.toString(), isNewUser })
  })
}
