"use client"

import { useTheme } from "next-themes"
import { IconBrightness } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <main className="p-6">
      <Button
        size="icon"
        variant="outline"
        className="size-7"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        <IconBrightness />
      </Button>
    </main>
  )
}
