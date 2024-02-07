import { useForm } from 'react-hook-form';
import { postSchema, postSchemaType } from '../model/postSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  ScrollArea,
} from '@/shared/ui';
import { FormFieldWrapper } from '@/widgets/authentication';
import TextEditor from '@/widgets/post/new-post/TextEditor';
import { useCreatePostMutation } from '@/entities/post/api/postApi';

export function CreatePostForm() {
  const form = useForm<postSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(postSchema),
    defaultValues: { title: '', content: '' },
  });

  const [createPost, data] = useCreatePostMutation();

  async function onSubmit(values: postSchemaType) {
    const postCreated = createPost(values);
    console.log(postCreated, data);
    form.reset();
  }

  return (
    <div className="relative flex h-full flex-col rounded-sm border bg-[#E7F4FF] shadow-sm ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-[80vh] w-full space-y-4 2xl:h-[85vh]"
        >
          <ScrollArea className="flex h-full flex-col">
            <div className=" h-auto px-16 py-8">
              <FormFieldWrapper
                name="title"
                control={form.control}
                placeholder="New post title here..."
                type="text"
                textarea
              />
            </div>
            <div className="flex-1">
              <FormField
                control={form.control}
                name="content"
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
          <div className=" absolute -bottom-20 flex h-[64px] w-full items-center">
            <Button type="submit" className="px-8">
              Publish
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
