import { Editor } from '@tiptap/react'
import { Bold, Italic, List, ListOrdered, Heading } from 'lucide-react'
import { Toggle } from '@/shared/ui'

type Props = {
  editor: Editor | null
}

export function ToolBar({ editor }: Props) {
  if (!editor) {
    return null
  }

  return (
    <div className='bg-[#f9f9f9] rounded-sm'>
      <Toggle
        size='sm'
        onClick={() => editor.chain().focus().toggleBold().run()}
        pressed={editor.isActive('bold')}
      >
        <Bold className='h-6 w-6' />
      </Toggle>
      <Toggle
        size='sm'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        pressed={editor.isActive('italic')}
      >
        <Italic className='h-6 w-6' />
      </Toggle>
      <Toggle
        size='sm'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        pressed={editor.isActive('bulletList')}
      >
        <List className='h-6 w-6' />
      </Toggle>
      <Toggle
        size='sm'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        pressed={editor.isActive('orderedList')}
      >
        <ListOrdered className='h-6 w-6' />
      </Toggle>
      <Toggle
        size='sm'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        pressed={editor.isActive('heading', { level: 2 })}
      >
        <Heading className='h-6 w-6' />
      </Toggle>
    </div>
  )
}
