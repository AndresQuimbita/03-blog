import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params, request, site }) => {
  const blogPosts = await getCollection("blog");

  return rss({
    // stylesheet: "/styles/rss.xsl",
    title: "Paul Blog",

    description: "Un simple blog con Astro",

    site: site ?? "",

    items: blogPosts.map(({ data, slug }) => ({
      title: data.title,
      pubDate: data.date,
      link: `/posts/${slug}`,
    })),

    customData: `<language>es-mx</language>`,
  });
};
