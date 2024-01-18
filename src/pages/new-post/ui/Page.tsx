import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import { Document } from '@tiptap/extension-document'
import StarterKit from '@tiptap/starter-kit'

const CustomDocument = Document.extend({
  content: 'heading block*'
})

export function NewPostPage() {
  const editor = useEditor({
    extensions: [
      CustomDocument,
      StarterKit.configure({
        document: false
      }),
      Highlight,
      Typography
    ],
    content: `
    <p>
      Markdown shortcuts make it easy to format the text while typing.
    </p>
    `,
    autofocus: false,
    editable: true,
    injectCSS: true,
    editorProps: {
      attributes: {
        class: ' mx-auto focus:outline-none'
      }
    }
  })

  return (
    <EditorContent
      editor={editor}
      className='border border-black w-[800px] p-16 h-[800px]'
    />
  )
}
