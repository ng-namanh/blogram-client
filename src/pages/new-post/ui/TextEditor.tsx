import { EditorContent, useEditor } from '@tiptap/react'
import { ToolBar } from './ToolBar'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import StarterKit from '@tiptap/starter-kit'

type Props = {
  onChange: (value: string) => void
}

function TextEditor({ onChange }: Props) {
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
      console.log(editor.getHTML())
    }
  })

  return (
    <>
      <ToolBar editor={editor} />
      <EditorContent
        editor={editor}
        className='border border-black w-[800px] p-16 h-[800px]'
      />
    </>
  )
}
export default TextEditor
