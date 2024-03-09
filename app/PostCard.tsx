import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Blog} from "contentlayer/generated";

export const PostCard = (post: Blog) => {
  return (
    <div>
      <hr />
      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        {/* Date */}
        <div className="xl:col-span-1">
          <time dateTime={post.date} className="block text-sm">
            {format(parseISO(post.date), "yyyy년 MM월 dd일")}
          </time>
        </div>

        <div className="xl:col-span-3">
          <Link href={post.slug} className="">
            <h2 className="my-1">{post.title}</h2>
          </Link>
          {post.tags?.map((tag, idx) => (
            <Link href={tag==="C++"?'/blog?tag=C%2B%2B' : `/blog?tag=${tag}`} key={idx}>
              <span key={idx} className="pt-3 pr-4 no-underline text-pink-500">
                #{tag}
              </span>
            </Link>
          ))}
          <div
            className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: post.description }}
          />
          <Link href={post.slug} className="">
            <p className="text-pink-500">Read More →</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
