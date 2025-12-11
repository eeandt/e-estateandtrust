import { rebeccaData } from "../../../components/authorDetails";
import Author from "../Author";

export const dynamic ='force-dynamic'

async function getBlogs() {
  const allBlogPosts = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/blogs",
    {
      // cache: "no-store",
    }
  ).then((res) => res.json());

  return allBlogPosts;
}

export const metadata = {
  title: "Rebecca L. Nichols Esq | Best Estate Planning Attorney Florida",
  description:
    "Rebecca Nicholas, Best estate planning & trust administration attorney in Ocala FL. Read her expertise in estate planning, trusts, & elder law through her blogs",
  alternates: {
    canonical: "https://www.e-estatesandtrusts.com/author/rebecca-nichols",
  },
};

export default async function page() {
  const allPosts = await getBlogs();

  const rebeccaBlogs = allPosts?.filter((el) =>
    el.authorName.toLowerCase().startsWith("rebecca")
  );

  return <div>{<Author data={rebeccaData} articles={rebeccaBlogs} />}</div>;
}
