import * as React from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"

import { SHORTCUTS } from "./shortcuts"

export function ShortcutTooltip({
  shortcut,
  label,
  children,
  delay = 300,
  ...props
}: React.ComponentProps<typeof TooltipTrigger> & {
  shortcut: keyof typeof SHORTCUTS
  label: string
  delay?: number
}) {
  return (
    <Tooltip delayDuration={delay}>
      <TooltipTrigger {...props}>{children}</TooltipTrigger>
      <TooltipContent className="flex items-center gap-1">
        {label}
        <kbd className="text-background/70 dark:bg-background/10 bg-background/20 z-10 rounded px-1 py-px font-sans text-[11px]">
          {SHORTCUTS[shortcut]}
        </kbd>
      </TooltipContent>
    </Tooltip>
  )
}
