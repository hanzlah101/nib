import * as React from "react"
import type { Editor, Range } from "@tiptap/core"

import { cn } from "@/lib/utils"

type EmojiSuggestion = {
  name: string
  emoji: string
  fallbackImage?: string
}

export type SuggestionProps = {
  items: EmojiSuggestion[]
  command: (item: EmojiSuggestion) => void
  editor: Editor
  range: Range
  query: string
}

export type EmojiListRef = {
  onKeyDown: (props: { event: KeyboardEvent }) => boolean
}

export const EmojiList = React.forwardRef<EmojiListRef, SuggestionProps>(
  ({ items, command }, ref) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const itemRefs = React.useRef<(HTMLDivElement | null)[]>([])

    const selectItem = (index: number) => {
      const item = items[index]
      if (item) command(item)
    }

    React.useEffect(() => {
      setSelectedIndex(0)
    }, [items])

    React.useEffect(() => {
      if (
        selectedIndex < itemRefs.current.length &&
        itemRefs.current[selectedIndex]
      ) {
        itemRefs.current[selectedIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        })
      }
    }, [selectedIndex])

    React.useImperativeHandle(ref, () => ({
      onKeyDown: ({ event }: { event: KeyboardEvent }) => {
        if (event.key === "ArrowUp") {
          setSelectedIndex((selectedIndex + items.length - 1) % items.length)
          return true
        }

        if (event.key === "ArrowDown") {
          setSelectedIndex((selectedIndex + 1) % items.length)
          return true
        }

        if (event.key === "Enter") {
          selectItem(selectedIndex)
          return true
        }

        return false
      }
    }))

    if (items.length === 0) {
      return null
    }

    return (
      <div className="bg-popover border-border max-h-80 w-64 overflow-y-auto rounded-md border p-1 shadow-md">
        {items.map((item, index) => (
          <div
            role="menuitem"
            key={`${item.name}-${index}`}
            ref={(el) => {
              itemRefs.current[index] = el
            }}
            onMouseOver={() => setSelectedIndex(index)}
            className={cn(
              "flex items-center gap-2 rounded p-2 transition-colors outline-none",
              {
                "bg-accent dark:bg-accent/50 text-accent-foreground":
                  selectedIndex === index
              }
            )}
            onClick={() => selectItem(index)}
          >
            <span className="flex-shrink-0 text-lg">{item.emoji}</span>
            <span className="text-foreground truncate text-sm font-medium">
              :{item.name}:
            </span>
          </div>
        ))}
      </div>
    )
  }
)
EmojiList.displayName = "EmojiList"
