import { MetadataRoute } from "next";
import { allPages, allBlogs } from "contentlayer/generated";

const BASE_URL = "https://jeongje.vercel.app"; // 나중에 커스텀 도메인 생기면 변경

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = allPages.map((page) => ({
    url: `${BASE_URL}/${page.slugAsParams}`,
    lastModified: new Date(),
  }));

  const posts = allBlogs.map((post) => ({
    url: `${BASE_URL}${post.slug}`,
    lastModified: post.date
      ? new Date(post.date)
      : new Date(),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    ...pages,
    ...posts,
  ];
}
