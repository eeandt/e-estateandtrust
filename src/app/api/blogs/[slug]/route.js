import { getBlogPostBySlug } from "@/lib/getBlogs";

export const dynamic ='force-dynamic'

export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const res = await getBlogPostBySlug({ slug: params.slug });
  return Response.json(res);
}
