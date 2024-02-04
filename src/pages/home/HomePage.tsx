import { useGetPostsQuery } from "@/entities/post/api/postApi";
import { formatDate } from "@/shared/lib/formatDate";
import { Heart, MessageCircle } from "lucide-react";

function HomePage() {
  const { data: posts } = useGetPostsQuery({});

  return (
    <div className="flex h-full w-[656px] columns-8 flex-col gap-4">
      {posts &&
        posts.map((post) => (
          <article
            key={post.id}
            className="cursor-pointer rounded-md bg-secondary p-4"
          >
            <div className="flex flex-col gap-2">
              <div>
                <div>
                  <p className="text-lg">
                    Posted by{" "}
                    <span className="cursor-pointer text-primary">
                      /{post.author.username}
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
                <h2 className="my-2 text-3xl font-bold">{post.title}</h2>
              </div>
              <div className="flex gap-5">
                <span className="flex gap-2">
                  <Heart className="h-6 w-6 cursor-pointer" /> <p>1 like</p>
                </span>
                <span className="flex gap-2 ">
                  <MessageCircle className="h-6 w-6 cursor-pointer" />{" "}
                  <p>1 comment</p>
                </span>
              </div>
            </div>
          </article>
        ))}
    </div>
  );
}

export default HomePage;
