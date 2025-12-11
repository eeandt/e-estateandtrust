import { katinaData } from "../../../components/authorDetails";
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
  title: "Katina H. Pantazis, Esq.| Trust and Estate Attorney Ocala",
  description:
    "Katina Pantazis is Ocala's top-rated trust and estate attorney. Dive into her expertise through engaging blogs related to trust and estate and probate matters.",
  alternates: {
    canonical: "https://www.e-estatesandtrusts.com/author/katina-pantazis",
  },
};

export default async function page() {
  const allPosts = await getBlogs();

  const katinaBlogs = allPosts?.filter(
    (el) => !el.authorName.toLowerCase().startsWith("rebecca")
  );

  return <div>{<Author data={katinaData} articles={katinaBlogs} />}</div>;
}
