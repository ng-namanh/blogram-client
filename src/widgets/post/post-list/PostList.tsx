import { useGetPostsQuery } from '@/entities/post/api/postApi';
import { PostCard } from '@/widgets/post';

function PostList() {
  const { data: posts } = useGetPostsQuery({});

  return (
    <div className="flex h-full w-[656px] columns-8 flex-col gap-4">
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

export default PostList;
