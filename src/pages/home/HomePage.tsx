import { useGetPostsQuery } from "@/entities/post/api/postApi";

function HomePage() {
  const { data } = useGetPostsQuery({});
  console.log(data);

  return (
    <div className="flex h-full columns-8 flex-col gap-8">
      {data &&
        data.map((post) => (
          <article key={post.id}>
            <p>{post.author.username}</p>
            <h2>{post.title}</h2>
          </article>
        ))}
    </div>
  );
}

export default HomePage;
