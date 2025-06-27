import { BubbleMenu, isNodeSelection, useCurrentEditor } from "@tiptap/react"

import { TextToggles } from "./text-toggles"
import { NodeSelector } from "./node-selector"

export function FloatingToolbar() {
  const { editor } = useCurrentEditor()

  if (!editor) return null

  return (
    <BubbleMenu
      editor={editor}
      className="bg-popover text-popover-foreground flex w-max items-center gap-1 rounded-md border p-1 shadow-md"
      tippyOptions={{
        placement: "top-start",
        moveTransition: "transform 0.15s ease-out"
      }}
      shouldShow={({ editor, state }) => {
        const { doc, selection } = state
        const { empty, ranges } = selection

        if (editor.isActive("image") || empty || isNodeSelection(selection)) {
          return false
        }

        const from = Math.min(...ranges.map((range) => range.$from.pos))
        const to = Math.max(...ranges.map((range) => range.$to.pos))

        return doc.textBetween(from, to).length > 0
      }}
    >
      <NodeSelector />

      <hr className="bg-border h-9 w-px" />

      <TextToggles />
    </BubbleMenu>
  )
}
