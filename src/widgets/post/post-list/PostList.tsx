import {
  useGetPostsQuery,
  useLikePostMutation,
} from '@/entities/post/api/postApi';
import { PostCard } from '@/widgets/post';

function PostList() {
  const { data: posts } = useGetPostsQuery({});

  const [likePost] = useLikePostMutation();

  return (
    <div className="flex h-full w-[656px] columns-8 flex-col gap-4">
      {posts &&
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            likePost={(postId: number) => likePost({ postId })}
          />
        ))}
    </div>
  );
}

export default PostList;
