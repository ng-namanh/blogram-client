import { useForm } from 'react-hook-form'
import { postSchema, postSchemaType } from '../model/postSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, FormControl, FormField, FormItem } from '@/shared/ui'
import { FormFieldWrapper } from '@/widgets/authentication'
import TextEditor from '@/widgets/new-post/TextEditor'

export function NewPostPage() {
  const form = useForm<postSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(postSchema),
    defaultValues: { title: '', content: '' }
  })

  async function onSubmit(values: postSchemaType) {
    console.log(values)
  }

  return (
    <div className='flex flex-col bg-[#E7F4FF] border shadow-sm rounded-sm '>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 w-full'
        >
          <div className=' px-16 py-8 h-auto'>
            <FormFieldWrapper
              name='title'
              control={form.control}
              placeholder='New post title here...'
              type='text'
              textarea
            />
          </div>
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <TextEditor onChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full'>
            Post
          </Button>
        </form>
      </Form>
    </div>
  )
}
