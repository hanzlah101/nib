import { IconLoader, type IconProps } from "@tabler/icons-react"

import { cn } from "@/lib/utils"

export function Spinner({ className, ...props }: IconProps) {
  return <IconLoader className={cn("animate-spin", className)} {...props} />
}
