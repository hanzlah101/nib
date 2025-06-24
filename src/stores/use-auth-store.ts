import { create } from "zustand"

type PendingState = "google" | "github" | "magic-link" | "resend"

type AuthStore = {
  magicLinkEmail?: string
  pending?: PendingState
  setMagicLinkEmail: (email?: string) => void
  setPending: (pending?: PendingState) => void
  reset: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  magicLinkEmail: undefined,
  pending: undefined,
  setMagicLinkEmail: (email) => set({ magicLinkEmail: email }),
  setPending: (pending) => set({ pending }),
  reset: () => set({ magicLinkEmail: undefined, pending: undefined })
}))
