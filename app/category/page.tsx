import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

interface Tags {
  [key: string]: number;
}

export default function Home() {
  // 게시글 날짜 순으로 불러오기
  let allPostsData = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // 태그카드에 사용될 태그 배열
  let tags: Tags = {};

  // Count occurrences of each tag
  allPostsData.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((count) => {
        tags[count] = (tags[count] || 0) + 1;
      });
    }
  });

  //   console.log(tags);

  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center max-sm:mx-9 ">
      <h1 className="text-4xl px-3 my-auto font-bold border-r-2">
        Category
      </h1>
      <div className="ml-3 text-center text-pink-500">
        {Object.keys(tags).map((tag, idx) => (
          <Link key={idx} className="cursor-pointer mr-3" href={tag==="C++"?'/blog?tag=C%2B%2B' : `/blog?tag=${tag}`}>
            {tag}({tags[tag]}){" "}
          </Link>
        ))}
      </div>
    </div>
  );
}
