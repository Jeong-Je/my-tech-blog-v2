import Link from "next/link";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { tags } from "@/content/tags";
import { PostCard } from "../PostCard";

export default function BlogPage({ searchParams }: { searchParams: any }) {
  let allPostsData = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  if (searchParams.tag) {
    allPostsData = allPostsData.filter((p) =>
      p.tags?.includes(searchParams.tag)
    );
  }

  const postCount = allPostsData.length;

  /* 페이지 네이션 */
  const pagination = Math.ceil(allPostsData.length / 5);

  if (postCount > 1) {
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
    const postsPerPage = 5;

    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = currentPage * postsPerPage;

    allPostsData = allPostsData.slice(startIndex, endIndex);
  }

  //페이지수가 총 3페이지라면 0~2 배열 생성
  let pageIntoArray = Array.from(Array(pagination).keys());

  return (
    <div className="flex max-w-5xl mx-auto">
      <div className="max-md:hidden px-6 py-4 w-[280px] overflow-auto rounded bg-gray-50 pt-5 shadow-lg dark:bg-gray-900/70 dark:shadow-gray-800/40">
        <h3 className={`font-bold ${searchParams.tag ? "" : "text-pink-500"}`}>
          <Link href="/blog">ALL POSTS</Link>
        </h3>
        <div className="px-3">
          {tags.map((tag, idx) => (
            <li
              key={idx}
              className={`uppercase list-none py-2 ${
                tag === searchParams?.tag ? "text-pink-500" : ""
              }`}
            >
              <Link
                href={tag === "C++" ? "/blog?tag=C%2B%2B" : `/blog?tag=${tag}`}
              >
                {tag}
              </Link>
            </li>
          ))}
        </div>
      </div>

      <div className="ml-7">
        {/* 게시글 컴포넌트 */}
        {allPostsData.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
