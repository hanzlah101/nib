import { useCurrentEditor } from "@tiptap/react"
import {
  IconBold,
  IconClearFormatting,
  IconCode,
  IconItalic,
  IconStrikethrough,
  IconSubscript,
  IconSuperscript,
  IconUnderline
} from "@tabler/icons-react"

import { ShortcutTooltip } from "../shortcut-tooltip"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"

export function TextToggles() {
  const { editor } = useCurrentEditor()
  if (!editor) return null

  return (
    <>
      <ShortcutTooltip asChild shortcut="BOLD" label="Bold">
        <Toggle
          isActive={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
        >
          <IconBold />
        </Toggle>
      </ShortcutTooltip>

      <ShortcutTooltip asChild shortcut="ITALIC" label="Italic">
        <Toggle
          isActive={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
        >
          <IconItalic />
        </Toggle>
      </ShortcutTooltip>

      <ShortcutTooltip asChild shortcut="UNDERLINE" label="Underline">
        <Toggle
          isActive={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
        >
          <IconUnderline />
        </Toggle>
      </ShortcutTooltip>

      <ShortcutTooltip asChild shortcut="STRIKE" label="Strikethrough">
        <Toggle
          isActive={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
        >
          <IconStrikethrough />
        </Toggle>
      </ShortcutTooltip>

      <ShortcutTooltip asChild shortcut="SUBSCRIPT" label="Subscript">
        <Toggle
          isActive={editor.isActive("subscript")}
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          disabled={!editor.can().chain().focus().toggleSubscript().run()}
        >
          <IconSubscript />
        </Toggle>
      </ShortcutTooltip>

      <ShortcutTooltip asChild shortcut="SUPERSCRIPT" label="Superscript">
        <Toggle
          isActive={editor.isActive("superscript")}
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          disabled={!editor.can().chain().focus().toggleSuperscript().run()}
        >
          <IconSuperscript />
        </Toggle>
      </ShortcutTooltip>

      <ShortcutTooltip asChild shortcut="INLINE_CODE" label="Inline Code">
        <Toggle
          isActive={editor.isActive("code")}
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
        >
          <IconCode />
        </Toggle>
      </ShortcutTooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            disabled={
              !editor.can().chain().focus().clearNodes().unsetAllMarks().run()
            }
            onClick={() => {
              editor.chain().focus().clearNodes().unsetAllMarks().run()
            }}
          >
            <IconClearFormatting />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Clear formatting</TooltipContent>
      </Tooltip>
    </>
  )
}

function Toggle({
  isActive,
  ...props
}: React.ComponentProps<"button"> & {
  isActive: boolean
}) {
  return (
    <Button
      size="icon"
      variant={isActive ? "secondary" : "ghost"}
      className="size-8"
      {...props}
    />
  )
}
