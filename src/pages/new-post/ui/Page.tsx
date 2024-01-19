import { useForm } from 'react-hook-form'
import { postSchema, postSchemaType } from '../model/postSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, FormControl, FormField, FormItem } from '@/shared/ui'
import { FormFieldWrapper } from '@/widgets/authentication'
import TextEditor from './TextEditor'

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
    <div className='flex flex-col'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 w-full'
        >
          <FormFieldWrapper
            name='title'
            control={form.control}
            placeholder='Title here...'
            type='text'
            textarea
          />
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
