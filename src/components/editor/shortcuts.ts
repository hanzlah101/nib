import { IS_APPLE } from "@/lib/constants"

export const SHORTCUTS = {
  // Text Formatting
  BOLD: IS_APPLE ? "⌘B" : "Ctrl+B",
  ITALIC: IS_APPLE ? "⌘I" : "Ctrl+I",
  UNDERLINE: IS_APPLE ? "⌘U" : "Ctrl+U",
  STRIKE: IS_APPLE ? "⇧⌘S" : "Ctrl+Shift+S",
  HIGHLIGHT: IS_APPLE ? "⇧⌘H" : "Ctrl+Shift+H",
  INLINE_CODE: IS_APPLE ? "⌘E" : "Ctrl+E",

  // Paragraph Formatting
  NORMAL_TEXT: IS_APPLE ? "⌥⌘0" : "Ctrl+Alt+0",
  H1: IS_APPLE ? "⌥⌘1" : "Ctrl+Alt+1",
  H2: IS_APPLE ? "⌥⌘2" : "Ctrl+Alt+2",
  H3: IS_APPLE ? "⌥⌘3" : "Ctrl+Alt+3",
  H4: IS_APPLE ? "⌥⌘4" : "Ctrl+Alt+4",
  H5: IS_APPLE ? "⌥⌘5" : "Ctrl+Alt+5",
  H6: IS_APPLE ? "⌥⌘6" : "Ctrl+Alt+6",

  // Lists
  ORDERED_LIST: IS_APPLE ? "⇧⌘7" : "Ctrl+Shift+7",
  BULLET_LIST: IS_APPLE ? "⇧⌘8" : "Ctrl+Shift+8",
  TASK_LIST: IS_APPLE ? "⇧⌘9" : "Ctrl+Shift+9",

  // Block-level Elements
  BLOCKQUOTE: IS_APPLE ? "⇧⌘B" : "Ctrl+Shift+B",
  CODE_BLOCK: IS_APPLE ? "⌥⌘C" : "Ctrl+Alt+C",

  // Alignment
  ALIGN_LEFT: IS_APPLE ? "⇧⌘L" : "Ctrl+Shift+L",
  ALIGN_CENTER: IS_APPLE ? "⇧⌘E" : "Ctrl+Shift+E",
  ALIGN_RIGHT: IS_APPLE ? "⇧⌘R" : "Ctrl+Shift+R",
  ALIGN_JUSTIFY: IS_APPLE ? "⇧⌘J" : "Ctrl+Shift+J",

  // Scripts
  SUBSCRIPT: IS_APPLE ? "⌘," : "Ctrl+,",
  SUPERSCRIPT: IS_APPLE ? "⌘." : "Ctrl+."
} as const
