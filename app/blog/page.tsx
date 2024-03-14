import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import { tags } from "@/content/tags";

const POSTS_PER_PAGE = 5;

export default function BlogPage({ searchParams }: { searchParams: any }) {
  let allPostsData = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  if (searchParams.tag) {
    allPostsData = allPostsData.filter((p) =>
      p.tags?.includes(searchParams.tag)
    );
  }

  const postCount = allPostsData.length;

  /* 페이지 네이션 */
  const pagination = Math.ceil(allPostsData.length / POSTS_PER_PAGE);

  if (postCount > 1) {
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = currentPage * POSTS_PER_PAGE;

    allPostsData = allPostsData.slice(startIndex, endIndex);
  }

  //페이지수가 총 3페이지라면 0~2 배열 생성
  let pageIntoArray = Array.from(Array(pagination).keys());

  return (
    <>
      <div className="flex max-w-5xl mx-auto">
        <div className="max-md:hidden h-full px-6 py-4 w-[280px] overflow-auto rounded bg-gray-50 pt-5 shadow-lg dark:bg-gray-900/70 dark:shadow-gray-800/40">
          <h3
            className={`font-bold ${searchParams.tag ? "" : "text-pink-500"}`}
          >
            <Link href="/blog">ALL POSTS</Link>
          </h3>
          <div className="px-3">
            {tags.map((tag, idx) => (
              <>
                <li
                  key={idx}
                  className={`uppercase list-none py-2 ${
                    tag === searchParams?.tag ? "text-pink-500" : ""
                  }`}
                >
                  <Link
                    href={
                      tag === "C++" ? "/blog?tag=C%2B%2B" : `/blog?tag=${tag}`
                    }
                  >
                    {tag}
                  </Link>
                </li>
              </>
            ))}
          </div>
        </div>

        <div className="prose dark:prose-invert ml-7">
          {/* 게시글 컴포넌트 */}
          {allPostsData.map((post, idx) => (
            <>
              <div>
                <div className="">
                  {/* Date */}
                  <div className="">
                    <time dateTime={post.date} className="block text-sm">
                      {format(parseISO(post.date), "yyyy년 MM월 dd일")}
                    </time>
                  </div>

                  <div className="">
                    <Link href={post.slug} className="">
                      <h2 className="my-1">{post.title}</h2>
                    </Link>
                    {post.tags?.map((tag, idx) => (
                      <Link
                        href={
                          tag === "C++"
                            ? "/blog?tag=C%2B%2B"
                            : `/blog?tag=${tag}`
                        }
                        key={idx}
                      >
                        <span
                          key={idx}
                          className="pr-4 no-underline text-pink-500"
                        >
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
            </>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {pageIntoArray.map((page, idx) => (
          <>
            <Link
              href={`/blog?tag=${
                searchParams.tag ? searchParams.tag : ""
              }&page=${page + 1}`}
              key={idx}
            >
              <div
                className={`prose dark:prose-invert w-10 h-10 text-center ${
                  parseInt(searchParams.page) === page + 1
                    ? "bg-gray-200 text-black"
                    : "hover:bg-gray-500"
                } rounded-md flex items-center justify-center`}
              >
                {page + 1}
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
