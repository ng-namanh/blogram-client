// import { useGetPostByIdQuery } from '@/entities/post/api/postApi';
import { Post } from '@/entities/post/model/types';
import { formatDate } from '@/shared/lib/formatDate';
import { Button } from '@/shared/ui';
import { Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  return (
    <article
      key={post.id}
      className="cursor-pointer rounded-md bg-secondary p-4"
    >
      <div className="flex flex-col gap-2">
        <Link to={`post/${post.id}`}>
          <div>
            <div>
              <p className="text-lg">
                Posted by
                <span className="ml-1 cursor-pointer text-primary">
                  {post.author.username}
                </span>
              </p>
              <time
                dateTime={post.timestamp}
                title={formatDate(post.timestamp)}
                className="text-sm text-gray-500"
              >
                {formatDate(post.timestamp)}
              </time>
            </div>
            <h2 className="my-2 text-3xl font-bold hover:text-primary">
              {post.title}
            </h2>
          </div>
        </Link>
        <div className="flex gap-5">
          <Link to={`post/${post.id}`}>
            <Button variant="ghost" className="flex gap-2 p-2">
              <Heart className="h-6 w-6 cursor-pointer" />
              <p>
                {post.likes > 1 ? ` ${post.likes} likes` : `${post.likes} like`}
              </p>
            </Button>
          </Link>{' '}
          <Link to={`post/${post.id}`}>
            <Button variant="ghost" className="flex gap-2 p-2">
              <MessageCircle className="h-6 w-6 cursor-pointer" />{' '}
              <p>1 comment</p>
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
