import { getBlogPosts } from "@/lib/getBlogs";

export const dynamic ='force-dynamic'

export async function GET(request) {

  const res = await getBlogPosts({ limit: 2 });
  return Response.json(res);
}
