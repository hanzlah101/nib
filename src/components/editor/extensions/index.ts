import { ReactNodeViewRenderer, type Extensions } from "@tiptap/react"

import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from "@tiptap/extension-task-list"
import Underline from "@tiptap/extension-underline"
import Superscript from "@tiptap/extension-subscript"
import Subscript from "@tiptap/extension-superscript"
import Highlight from "@tiptap/extension-highlight"
import Typography from "@tiptap/extension-typography"
import TextAlign from "@tiptap/extension-text-align"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import Emoji, { gitHubEmojis } from "@tiptap/extension-emoji"

import { createLowlight, common } from "lowlight"
import { isEmojiSupported } from "is-emoji-supported"

import { Keymap } from "./keymap"
import { CodeBlock } from "../code-block"
import { emojiSuggestions } from "../emoji/suggestions"

const lowlight = createLowlight(common)

const emojis = gitHubEmojis
  .map((emoji) => {
    if (emoji.name === "israel") {
      return {
        ...emoji,
        emoji: "🇵🇸",
        name: "child_killers",
        tags: [...(emoji.tags || []), "israel"]
      }
    }
    return emoji
  })
  .filter(({ emoji }) => emoji && isEmojiSupported(emoji))

export const extensions: Extensions = [
  StarterKit.configure({
    codeBlock: false
  }),
  Placeholder.configure({
    placeholder: "Write something..."
  }),
  TaskList,
  TaskItem.configure({
    nested: true
  }),
  Underline,
  Superscript,
  Subscript,
  Highlight.configure({
    multicolor: true
  }),
  Typography,
  TextAlign,
  CodeBlockLowlight.extend({
    addNodeView: () => ReactNodeViewRenderer(CodeBlock)
  }).configure({
    lowlight
  }),
  Emoji.configure({
    emojis,
    enableEmoticons: true,
    suggestion: emojiSuggestions
  }),
  Keymap
]
