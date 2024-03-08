import { tags } from "@/content/tags";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="w-64 mx-auto bg-gray-50">
      <h3 className="text-pink-500 font-bold">
        <Link href="/blog">ALL POSTS</Link>
      </h3>
      {tags.map((tag, idx) => (
        <li key={idx}>
          <Link href={`/blog?tag=${tag}`}>{tag}</Link>
        </li>
      ))}
    </div>
  );
}
