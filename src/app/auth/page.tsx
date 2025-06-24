import { redirect } from "next/navigation"

import { Logo } from "@/components/logo"
import { getSession } from "@/server/auth/session"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { MagicLinkForm } from "./_components/magic-link-form"
import { OAuthLogin } from "./_components/oauth-login"
import { AuthWrapper } from "./_components/auth-wrapper"

export default async function Auth() {
  const session = await getSession()

  if (session) redirect("/")

  return (
    <div className="flex min-h-svh w-full items-center">
      <Card className="mx-auto w-full max-w-md">
        <AuthWrapper>
          <CardHeader>
            <Logo className="mb-2 [&>span]:sr-only" />
            <CardTitle>Welcome to Nib</CardTitle>
            <CardDescription>Please login to continue</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <MagicLinkForm />

            <div className="flex w-full items-center gap-2">
              <div className="bg-border h-px w-full" />
              <span className="text-muted-foreground font-mono text-sm">
                or
              </span>
              <div className="bg-border h-px w-full" />
            </div>

            <OAuthLogin />
          </CardContent>
        </AuthWrapper>
      </Card>
    </div>
  )
}
