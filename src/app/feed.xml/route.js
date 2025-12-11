import RSS from "rss";
import { getBlogPosts } from "@/lib/getBlogs";
export async function GET() {
    return new Response(feed.xml({ indent: true }), {
        headers: {
          'Content-Type': 'application/atom+xml; charset=utf-8',
        },
      });
  }
  const site_url = 'https://www.e-estatesandtrusts.com'
const feed = new RSS({
    title: '',
    description: '',
    site_url: '',
    feed_url: '',
    copyright: '',
    language: '',
    pubDate: '',
  });
  // (await getBlogPosts())
  // .map((post) => {
  //   feed.item({
  //     title: post.title,
  //     guid: `${site_url}/blogs${post.slug}`,
  //     url: `${site_url}${post.slug}`,
  //     date: post.date,
  //     description: post.description,
  //     author: post.authorName,
  //   //   categories: post.category.map(({ name }) => name) || [],
  //   });
  // });
  