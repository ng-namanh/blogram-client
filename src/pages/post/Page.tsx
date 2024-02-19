import { useGetPostByIdQuery } from '@/entities/post/api/postApi';
import { formatDate } from '@/shared/lib/formatDate';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

export function PostPage() {
  const { postId } = useParams();
  const { data } = useGetPostByIdQuery(Number(postId));
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = data?.post.content || '';
    }
  }, [data]);

  return (
    <div className="grid-cols-postLayout grid gap-4">
      <aside className=""></aside>
      <main className=" min-h-screen w-[806px] rounded-md bg-secondary">
        <div className=" px-16 pt-8">
          <div>
            <p className="cursor-pointer text-lg hover:text-primary">
              {data?.post.author.username}
            </p>
            {data ? (
              <time
                dateTime={data?.post.timestamp}
                title={formatDate(data.post.timestamp)}
                className="text-sm text-gray-500"
              >
                {formatDate(data.post.timestamp)}
              </time>
            ) : null}
          </div>
          <h1 className="my-2 text-5xl font-bold ">{data?.post.title}</h1>
        </div>
        <div className="px-16 py-8" ref={contentRef}></div>
      </main>
      <aside className=""></aside>
    </div>
  );
}
