import { EditorContent, useEditor } from '@tiptap/react'
import { ToolBar } from './ToolBar'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react'

type Props = {
  onChange: (value: string) => void
  value: string
}

function TextEditor({ onChange, value }: Props) {
  const editor = useEditor({
    extensions: [StarterKit.configure(), Highlight, Typography],
    content: `
    <p>
      Markdown shortcuts make it easy to format the text while typing.
    </p>
    `,
    editorProps: {
      attributes: {
        class: 'mx-auto focus:outline-none'
      }
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    }
  })
  useEffect(() => {
    if (value === '' && editor) {
      editor.commands.clearContent()
    }
  }, [value, editor])
  return (
    <>
      <ToolBar editor={editor} />
      <EditorContent
        editor={editor}
        value={value}
        className=' w-[800px] p-16 mt-0 '
      />
    </>
  )
}
export default TextEditor
