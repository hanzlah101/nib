"use client"

import { toast } from "sonner"
import { IconEdit, IconMailCheck, IconRefresh } from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/stores/use-auth-store"
import { authClient } from "@/lib/auth-client"
import { MAGIC_LINK_EXPIRATION } from "@/lib/constants"
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

export function MagicLinkSuccess() {
  const { magicLinkEmail, pending, setPending, setMagicLinkEmail } =
    useAuthStore()

  if (!magicLinkEmail) return null

  const handleResend = async () => {
    setPending("resend")
    const { error } = await authClient.signIn.magicLink({
      email: magicLinkEmail
    })

    setPending(undefined)

    if (error) {
      toast.error(
        error.message ?? "Failed to send verification link, please try again"
      )
    } else {
      toast.success("Verification link sent successfully")
    }
  }

  return (
    <>
      <CardHeader className="flex flex-col items-center justify-center text-center">
        <IconMailCheck className="size-8 opacity-70" />
        <CardTitle>Check your email</CardTitle>
        <CardDescription className="text-center">
          We&apos;ve sent a verification link to
        </CardDescription>
        <button
          disabled={!!pending}
          onClick={() => setMagicLinkEmail(undefined)}
          className="group text-primary hover:bg-muted relative px-2 py-0.5 font-mono text-sm font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50"
        >
          {magicLinkEmail}
          <span className="bg-muted absolute top-1/2 -right-5 flex h-6 -translate-y-1/2 items-center justify-center pr-2 opacity-0 transition-opacity group-hover:opacity-100">
            <IconEdit className="size-4 shrink-0" />
          </span>
        </button>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="bg-muted/50 text-muted-foreground rounded-lg border p-4 text-center text-sm text-pretty">
          Click the link in your email to sign in. The link will expire in{" "}
          <span className="text-foreground">
            {MAGIC_LINK_EXPIRATION} minutes
          </span>
          . If you don&apos;t see it, kindly check your spam folder.
        </p>

        <Button
          variant="outline"
          className="w-full"
          onClick={handleResend}
          disabled={!!pending}
        >
          <IconRefresh className={cn(pending === "resend" && "animate-spin")} />
          {pending === "resend" ? "Sending..." : "Resend email"}
        </Button>
      </CardContent>
    </>
  )
}
