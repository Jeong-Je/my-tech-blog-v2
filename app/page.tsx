import { allBlogs} from "@/.contentlayer/generated";
import { PostCard } from "./PostCard";
import Link from "next/link";

export default function Home() {
  let allPostsData;
  if(allBlogs[0].date > allBlogs[allBlogs.length - 1].date){
    allPostsData = allBlogs.slice(0,4);
  }else{
    allPostsData = allBlogs.slice(-4).reverse();
  }

  return (
    <div className="prose dark:prose-invert max-w-5xl mx-auto">
      <div>
        <div>
          <h1 className="">Latest</h1>
        </div>
      </div>

      {/* 게시글 컴포넌트 */}
      {allPostsData.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}

      <div className="flex">
        <Link href="/blog" className="text-pink-500 ml-auto">
          All Posts →
        </Link>
      </div>
    </div>
  );
}
