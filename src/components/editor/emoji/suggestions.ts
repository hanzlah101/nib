import tippy from "tippy.js"
import { ReactRenderer } from "@tiptap/react"

import type * as React from "react"
import type { Instance, Props } from "tippy.js"
import type { EmojiOptions } from "@tiptap/extension-emoji"

import { EmojiList } from "./list"
import type { EmojiListRef, SuggestionProps } from "./list"

type Suggestion = EmojiOptions["suggestion"]

export const emojiSuggestions: Suggestion = {
  items: ({ editor, query }) => {
    return (editor.storage.emoji.emojis as EmojiOptions["emojis"])
      .filter((emoji) => {
        const lowerQuery = query.toLowerCase()
        return (
          emoji.name.toLowerCase().includes(lowerQuery) ||
          (emoji.shortcodes &&
            emoji.shortcodes.some((code) =>
              code.toLowerCase().includes(lowerQuery)
            )) ||
          (emoji.tags &&
            emoji.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)))
        )
      })
      .slice(0, 6)
  },

  allowSpaces: false,

  render: () => {
    let popup: Instance<Props>[]
    let component: ReactRenderer<
      EmojiListRef,
      SuggestionProps & React.RefAttributes<EmojiListRef>
    >

    return {
      onStart: (props) => {
        component = new ReactRenderer(EmojiList, {
          props,
          editor: props.editor
        })

        popup = tippy("body", {
          getReferenceClientRect: props.clientRect as () => DOMRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start"
        })
      },

      onUpdate(props) {
        component.updateProps(props)

        popup[0].setProps({
          getReferenceClientRect: props.clientRect as () => DOMRect
        })
      },

      onKeyDown(props) {
        if (props.event.key === "Escape") {
          popup[0].hide()
          component.destroy()

          return true
        }

        return component.ref?.onKeyDown(props) ?? false
      },

      onExit() {
        popup[0].destroy()
        component.destroy()
      }
    }
  }
}
