import { useForm } from 'react-hook-form'
import { postSchema, postSchemaType } from '../model/postSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  ScrollArea
} from '@/shared/ui'
import { FormFieldWrapper } from '@/widgets/authentication'
import TextEditor from '@/widgets/new-post/TextEditor'
import { useCreatePostMutation } from '@/entities/post/api/postApi'

export function CreatePostForm() {
  const form = useForm<postSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(postSchema),
    defaultValues: { title: '', content: '' }
  })

  const [createPost, data] = useCreatePostMutation()

  async function onSubmit(values: postSchemaType) {
    const postCreated = createPost(values)
    console.log(postCreated, data)
    form.reset()
  }

  return (
    <div className='flex flex-col bg-[#E7F4FF] border shadow-sm rounded-sm h-full relative '>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 w-full h-[80vh] 2xl:h-[85vh]'
        >
          <ScrollArea className='flex flex-col h-full'>
            <div className=' px-16 py-8 h-auto'>
              <FormFieldWrapper
                name='title'
                control={form.control}
                placeholder='New post title here...'
                type='text'
                textarea
              />
            </div>
            <div className='flex-1'>
              <FormField
                control={form.control}
                name='content'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TextEditor
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </ScrollArea>
          <div className=' h-[64px] flex items-center absolute -bottom-20 w-full'>
            <Button type='submit' className='px-8'>
              Publish
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
