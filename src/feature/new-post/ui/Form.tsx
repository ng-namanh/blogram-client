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
import { useRef, useState } from 'react';
import { useUploadImageMutation } from '@/feature/upload-image/model/api';

export function CreatePostForm() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const form = useForm<postSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(postSchema),
    defaultValues: { title: '', content: '' },
  });

  const [createPost] = useCreatePostMutation();

  async function onSubmit(values: postSchemaType) {
    createPost(values).unwrap();
    form.reset();
  }
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadImage] = useUploadImageMutation();
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="relative flex h-full flex-col rounded-sm border shadow-sm ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="h-[80vh] w-full space-y-4 2xl:h-[85vh]"
        >
          <ScrollArea className="flex h-full flex-col">
            <div className="h-auto px-16 py-8">
              {imageUrl && <img src={imageUrl} alt="" />}
              <div className="justify-cente flex items-center">
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={async (e) => {
                    if (e.target.files) {
                      const response = await uploadImage(e.target.files[0]);
                      console.log(response);

                      if ('data' in response) {
                        setImageUrl(response.data.url);
                        console.log(imageUrl);
                      }
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleButtonClick}
                  className=" rounded px-3 py-1 focus:outline-none"
                >
                  Add a cover image
                </Button>
              </div>
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
          <div className="absolute -bottom-20 flex h-[64px] w-full items-center">
            <Button type="submit" className="px-8">
              Publish
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
