"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { GoogleIcon } from "@/components/icons/google"
import { GitHubIcon } from "@/components/icons/github"
import { authClient } from "@/lib/auth-client"
import { Spinner } from "@/components/ui/spinner"
import { useAuthStore } from "@/stores/use-auth-store"

type Provider = "google" | "github"

export function OAuthLogin() {
  const pending = useAuthStore((state) => state.pending)
  const setPending = useAuthStore((state) => state.setPending)

  const handleLogin = async (provider: Provider) => {
    setPending(provider)
    const searchParams = new URLSearchParams(window.location.search)
    const callbackURL = searchParams.get("redirectTo") ?? "/"
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL,
      newUserCallbackURL: `/onboarding?afterOnboarding=${encodeURIComponent(callbackURL)}`
    })
    setPending(undefined)
    if (error) {
      toast.error(`Failed to login with ${provider}`)
    }
  }

  return (
    <div className="space-y-2">
      <Button
        variant="outline"
        className="w-full"
        disabled={!!pending}
        onClick={() => handleLogin("google")}
      >
        {pending === "google" ? <Spinner /> : <GoogleIcon />}
        Continue with Google
      </Button>
      <Button
        variant="outline"
        className="w-full"
        disabled={!!pending}
        onClick={() => handleLogin("github")}
      >
        {pending === "github" ? <Spinner /> : <GitHubIcon />}
        Continue with Github
      </Button>
    </div>
  )
}
