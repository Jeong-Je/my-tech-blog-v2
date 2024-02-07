import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import { Pagination } from "./Pagination";
import { PostCard } from "./PostCard";
import { TagCardPc } from "@/components/layouts/TagCard/TagCardPc";
import { TagCardMobile } from "@/components/layouts/TagCard/TagCardMobile";

export default function Home({ searchParams }: { searchParams: any }) {
  if (!searchParams.page) {
    searchParams.page = "1";
  }
  if (!searchParams.tag) {
    searchParams.tag = "ALL";
  }

  // 게시글 날짜 순으로 불러오기
  let allPostsData = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // 태그카드에 사용될 태그 배열
  let tags: Array<string> = [];

  tags.push("ALL");

  allPostsData.map((post) => {
    if (post.tags) {
      tags.push(...post.tags); // 태그 배열을 추가
    }
  });

  tags = Array.from(new Set(tags)); // 중복 값 제거

  //태그에 맞는 게시글 불러오기
  if (searchParams.tag !== "ALL") {
    allPostsData = allPostsData.filter((p) =>
      p.tags?.includes(searchParams?.tag)
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
    <div className="prose max-w-[940px] mx-auto dark:prose-invert">
      {/* 사이드 태그 카드 */}
      <div className="tagCardPc pt-32 w-32 h-6 fixed">
        <TagCardPc searchParams={searchParams} tags={tags} />
      </div>

      <div>
        <TagCardMobile searchParams={searchParams} tags={tags} />
      </div>

      <div className="max-w-[640px] mx-auto">
        <div className="rounded-lg mt-8 p-4 bg-gray-200 max-sm:mx-5">
          <span>
            ℹ️ 이 곳은 제가 공부한 내용을 정리하고 기록하는 공간입니다.🚀✨
          </span>
        </div>

        <div className="prose dark:prose-invert">
          {searchParams.tag !== "ALL" ? (
            <h3>
              📝 {searchParams.tag} ({postCount})
            </h3>
          ) : (
            <h3>📝 All Posts ({postCount})</h3>
          )}
        </div>
      </div>

      {/* 게시글 컴포넌트 */}
      {allPostsData.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}

      {/* 페이지 네이션 컴포넌트 */}
      <div className="flex justify-center">
        {pageIntoArray.map((page, idx) => (
          <Pagination key={idx} searchParams={searchParams} page={page} />
        ))}
      </div>
    </div>
  );
}
