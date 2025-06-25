"use client"

import { useTheme } from "next-themes"
import { IconBrightness } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <main className="flex items-center justify-between p-6">
      <Button
        size="icon"
        variant="outline"
        className="size-7"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        <IconBrightness />
      </Button>

      <Button
        onClick={async () => {
          await authClient.signOut()
          window.location.href = `/auth?redirectTo=${encodeURIComponent(
            window.location.pathname + window.location.search
          )}`
        }}
      >
        Sign Out
      </Button>
    </main>
  )
}
