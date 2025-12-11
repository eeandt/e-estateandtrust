import { getBlogPosts } from "@/lib/getBlogs";
export default async function Sitemap() {
  const allBlogPosts = await getBlogPosts();

  return [
    {
      url: "https://www.e-estatesandtrusts.com/",
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: "https://www.e-estatesandtrusts.com/estate-planning",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.e-estatesandtrusts.com/trust-administration",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.e-estatesandtrusts.com/probate",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.e-estatesandtrusts.com/legal-team",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.e-estatesandtrusts.com/blogs",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.e-estatesandtrusts.com/contact-us",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.e-estatesandtrusts.com/estate-planning",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.e-estatesandtrusts.com/resources",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.e-estatesandtrusts.com/author/rebecca-nichols",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.e-estatesandtrusts.com/author/katina-pantazis",
      lastModified: new Date(),
      priority: 0.8,
    },

    ...allBlogPosts.map((post) => ({
      url: `https://www.e-estatesandtrusts.com/blogs/${post.slug}`,
      lastModified: new Date(),
      priority: 0.64,
    })),
  ];
}
// const posts = allBlogPosts.map((post) => ({
//   url: `https://www.e-estatesandtrusts.com/blogs${post.slug}`,
//   lastModified: new Date(),
//   priority: 0.64
// }));
