import { MetadataRoute } from "next";
import { allPages } from "contentlayer/generated";

const BASE_URL = "https://jeongje.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    ...allPages.map((page) => ({
      url: `${BASE_URL}/${page.slugAsParams}`,
      lastModified: new Date()
    })),
  ];
}
