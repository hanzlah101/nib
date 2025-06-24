"use client"

import { useAuthStore } from "@/stores/use-auth-store"
import { MagicLinkSuccess } from "./magic-link-success"

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const magicLinkEmail = useAuthStore((state) => state.magicLinkEmail)

  if (magicLinkEmail) return <MagicLinkSuccess />

  return children
}
