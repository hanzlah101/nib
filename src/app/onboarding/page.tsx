import { getSession } from "@/server/auth/session"
import { Card } from "@/components/ui/card"
import { Onboarding } from "./_components/onboarding"

export default async function OnboardingPage() {
  const session = await getSession()

  return (
    <div className="flex min-h-svh w-full items-center">
      <Card className="mx-auto w-full max-w-md">
        <Onboarding initialSession={session} />
      </Card>
    </div>
  )
}
