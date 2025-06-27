"use client"

import { useMemo, useState } from "react"
import { CommandInput } from "cmdk"
import { useCurrentEditor } from "@tiptap/react"
import {
  IconAlignJustified,
  IconChevronDown,
  IconCode,
  IconH1,
  IconH2,
  IconH3,
  IconList,
  IconListDetails,
  IconListNumbers,
  IconQuote
} from "@tabler/icons-react"

import { SHORTCUTS } from "../shortcuts"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandShortcut
} from "@/components/ui/command"

export function NodeSelector() {
  const { editor } = useCurrentEditor()
  const [open, setOpen] = useState(false)

  const nodes = useMemo(() => {
    if (!editor) return []

    return [
      {
        name: "Paragraph",
        icon: IconAlignJustified,
        shortcut: SHORTCUTS.NORMAL_TEXT,
        isActive: () =>
          editor.isActive("paragraph") &&
          !editor.isActive("bulletList") &&
          !editor.isActive("orderedList"),
        setActive: () => editor.chain().focus().clearNodes().run()
      },
      "toggleHeading" in editor.commands
        ? {
            name: "Heading 1",
            icon: IconH1,
            shortcut: SHORTCUTS.H1,
            isActive: () => editor.isActive("heading", { level: 1 }),
            setActive: () =>
              editor
                .chain()
                .focus()
                .clearNodes()
                .toggleHeading({ level: 1 })
                .run()
          }
        : null,
      "toggleHeading" in editor.commands
        ? {
            name: "Heading 2",
            icon: IconH2,
            shortcut: SHORTCUTS.H2,
            isActive: () => editor.isActive("heading", { level: 2 }),
            setActive: () =>
              editor
                .chain()
                .focus()
                .clearNodes()
                .toggleHeading({ level: 2 })
                .run()
          }
        : null,
      "toggleHeading" in editor.commands
        ? {
            name: "Heading 3",
            icon: IconH3,
            shortcut: SHORTCUTS.H3,
            isActive: () => editor.isActive("heading", { level: 3 }),
            setActive: () =>
              editor
                .chain()
                .focus()
                .clearNodes()
                .toggleHeading({ level: 3 })
                .run()
          }
        : null,
      "toggleBulletList" in editor.commands
        ? {
            name: "Bullet list",
            icon: IconList,
            shortcut: SHORTCUTS.BULLET_LIST,
            isActive: () => editor.isActive("bulletList"),
            setActive: () =>
              editor.chain().focus().clearNodes().toggleBulletList().run()
          }
        : null,
      "toggleOrderedList" in editor.commands
        ? {
            name: "Numbered list",
            icon: IconListNumbers,
            shortcut: SHORTCUTS.ORDERED_LIST,
            isActive: () => editor.isActive("orderedList"),
            setActive: () =>
              editor.chain().focus().clearNodes().toggleOrderedList().run()
          }
        : null,
      "toggleTaskList" in editor.commands
        ? {
            name: "Task list",
            icon: IconListDetails,
            shortcut: SHORTCUTS.TASK_LIST,
            isActive: () => editor.isActive("taskList"),
            setActive: () =>
              editor.chain().focus().clearNodes().toggleTaskList().run()
          }
        : null,
      "toggleBlockquote" in editor.commands
        ? {
            name: "Blockquote",
            icon: IconQuote,
            shortcut: SHORTCUTS.BLOCKQUOTE,
            isActive: () => editor.isActive("blockquote"),
            setActive: () =>
              editor.chain().focus().clearNodes().toggleBlockquote().run()
          }
        : null,
      "toggleCodeBlock" in editor.commands
        ? {
            name: "Code block",
            icon: IconCode,
            shortcut: SHORTCUTS.CODE_BLOCK,
            isActive: () => editor.isActive("codeBlock"),
            setActive: () =>
              editor.chain().focus().clearNodes().toggleCodeBlock().run()
          }
        : null
    ].filter((item): item is NonNullable<typeof item> => item !== null)
  }, [editor])

  if (!nodes.length) return null

  const selectedNode = nodes.find((node) => node.isActive()) ?? nodes[0]

  return (
    <Popover
      modal
      open={open}
      onOpenChange={(open) => {
        setOpen(open)
        if (!open) editor?.commands.focus()
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="data-[state=open]:bg-accent dark:data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent h-8"
        >
          <selectedNode.icon className="size-4" />
          {selectedNode.name}
          <IconChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        role="menu"
        sideOffset={10}
        side="bottom"
        align="start"
        className="w-auto min-w-48 p-0"
        onCloseAutoFocus={(evt) => evt.preventDefault()}
      >
        <Command loop shouldFilter={false}>
          <CommandInput value="" className="h-0 w-0 opacity-0" />
          <CommandList className="max-h-max">
            <CommandGroup>
              {nodes.map((node) => (
                <CommandItem
                  key={node.name}
                  className="whitespace-nowrap"
                  onSelect={() => {
                    node.setActive()
                    setOpen(false)
                  }}
                >
                  <node.icon />
                  {node.name}
                  <CommandShortcut className="pl-4 text-[11px]">
                    {node.shortcut}
                  </CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
