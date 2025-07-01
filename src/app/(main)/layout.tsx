import type { ReactNode } from "react"

export default function MainLayout({ children }: { children: ReactNode }) {
  // TODO: add navigation bar.
  return <div className="mx-auto max-w-7xl p-6">{children}</div>
}
