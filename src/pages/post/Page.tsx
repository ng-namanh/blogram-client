import { useGetPostByIdQuery } from '@/entities/post/api/postApi';
import { formatDate } from '@/shared/lib/formatDate';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

export function PostPage() {
  const { postId } = useParams();
  const { data } = useGetPostByIdQuery(Number(postId));
  console.log(data?.post.content);

  return (
    <div className="grid grid-cols-postLayout gap-4">
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
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          className="whitespace-pre-wrap px-16 py-8"
        >
          {data?.post.content}
        </ReactMarkdown>
      </main>
      <aside className=""></aside>
    </div>
  );
}
