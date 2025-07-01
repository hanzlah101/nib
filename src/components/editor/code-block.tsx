"use client"

import * as React from "react"
import { toast } from "sonner"
import { IconCheck, IconCopy } from "@tabler/icons-react"
import {
  NodeViewContent,
  NodeViewWrapper,
  type NodeViewProps
} from "@tiptap/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"

export function CodeBlock({
  node,
  updateAttributes,
  extension,
  editor
}: NodeViewProps) {
  return (
    <NodeViewWrapper className="relative">
      <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
        <select
          defaultValue={node.attrs.language}
          className="bg-muted hover:bg-muted/80 text-muted-foreground h-7.5 rounded-md border-r-6 border-transparent pl-1.5 text-sm select-none [&_option]:select-none"
          onChange={(evt) => {
            updateAttributes({ language: evt.target.value })
            editor.commands.focus()
          }}
        >
          <option value="null">auto</option>
          <option disabled>—</option>
          {extension?.options?.lowlight
            ?.listLanguages()
            .map((lang: string, index: number) => (
              <option key={index} value={lang}>
                {lang}
              </option>
            ))}
        </select>
        <CopyButton code={node.textContent} />
      </div>

      <pre>
        <NodeViewContent
          as="code"
          className="!whitespace-pre"
          spellCheck="false"
        />
      </pre>
    </NodeViewWrapper>
  )
}

function CopyButton({ code }: { code: string }) {
  const [isCopied, setIdCopied] = React.useState(false)

  const handleCopy = () => {
    if (!code || isCopied) return
    navigator.clipboard.writeText(code).catch((error) => {
      console.error("[COPY_ERROR]", error)
      toast.error("Failed to copy to clipboard")
    })

    setIdCopied(true)
    setTimeout(() => setIdCopied(false), 1000)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={() => handleCopy()}
          variant="ghost"
          size="icon"
          className="relative size-7.5"
          onMouseDown={(evt) => evt.preventDefault()}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <IconCheck
              className={cn(
                "size-3.5 transition-transform ease-in-out",
                isCopied ? "scale-100" : "scale-0"
              )}
            />
          </div>
          <IconCopy
            className={cn(
              "size-3.5 transition-transform ease-in-out",
              isCopied ? "scale-0" : "scale-100"
            )}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">Copy code</TooltipContent>
    </Tooltip>
  )
}
