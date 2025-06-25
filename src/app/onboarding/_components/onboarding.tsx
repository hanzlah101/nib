"use client"

import { redirect, RedirectType, useSearchParams } from "next/navigation"

import { Logo } from "@/components/logo"
import { type SessionRes, useSession } from "@/stores/use-session"
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { UpdateNameForm } from "./update-name-form"
import { UpdateInterestsForm } from "./update-interests-form"

export function Onboarding({
  initialSession: initialData
}: {
  initialSession: SessionRes
}) {
  const searchParams = useSearchParams()
  const { session } = useSession({ initialData })

  if (!session) redirect("/auth")

  if (!session.user.name) {
    return (
      <>
        <CardHeader>
          <Logo className="mb-2 [&>span]:sr-only" />
          <CardTitle>Almost Done</CardTitle>
          <CardDescription>Please enter your name to proceed.</CardDescription>
        </CardHeader>
        <CardContent>
          <UpdateNameForm />
        </CardContent>
      </>
    )
  }

  if (!session.user.interests.length) {
    return (
      <>
        <CardHeader>
          <Logo className="mb-2 [&>span]:sr-only" />
          <CardTitle>What are you interested in?</CardTitle>
          <CardDescription>
            Select one or more interests to personalize your experience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UpdateInterestsForm />
        </CardContent>
      </>
    )
  }

  redirect(searchParams.get("afterOnboarding") ?? "/", RedirectType.push)
}
