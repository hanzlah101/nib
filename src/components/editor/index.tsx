"use client"

import { EditorProvider } from "@tiptap/react"

import { extensions } from "./extensions"
import { FloatingToolbar } from "./floating-toolbar"

export function Editor() {
  return (
    <div className="w-full">
      <EditorProvider
        content={"<p>Hello World! 🌎️</p>"}
        extensions={extensions}
        autofocus="end"
        immediatelyRender={false}
        editorProps={{
          attributes: {
            class: "prose min-w-full outline-none"
          }
        }}
      >
        <FloatingToolbar />
      </EditorProvider>
    </div>
  )
}
