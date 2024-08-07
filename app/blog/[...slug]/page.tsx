import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import ScrollIndicator from "@/components/ScrollIndicator";
import Link from "next/link";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allBlogs.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allBlogs.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <>
      <ScrollIndicator />
      <article className="prose dark:prose-invert mx-auto max-sm:mx-5">
        <h1 className="mb-2 break-all">{post.title}</h1>
        {post.tags?.map((tag, idx) => (
          <Link key={idx} href={`/blog?tag=${tag}`}>
            <span className="text-pink-500 font-bold pr-3 uppercase">
              #{tag}
            </span>
          </Link>
        ))}
        {post.description && (
          <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
        )}
        <time dateTime={post.date} className="block text-sm">
          {format(parseISO(post.date), "yyyy년 MM월 dd일")}
        </time>
        <hr className="my-4" />
        <Mdx code={post.body.code} />
      </article>
    </>
  );
}
