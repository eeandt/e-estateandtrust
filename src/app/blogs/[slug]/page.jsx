import MarginWrapper from "@/components/marginWrapper";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import Share from "@/components/Share";
import "./blog.scss";
import Image from "next/image";

export const dynamic ='force-dynamic'

async function getSingleBlog({ slug }) {
  const blog = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/blogs/" + slug,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());
  if (!blog) {
    notFound();
  }
  return blog;
}

export async function generateMetadata({ params }) {
  const post = await getSingleBlog({ slug: params.slug });
console.log("post" , post)
  if (!post) {
    return {};
  }

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.e-estatesandtrusts.com/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.e-estatesandtrusts.com/blogs/${post.slug}`,
      siteName: "e-estatesandtrusts",
      images: [
        {
          url: `${
            process.env.NEXT_PUBLIC_SERVER_URL ||
            "https://api.e-estatesandtrusts.com"
          }/api/files/posts/${post.id}/${post.featuredImage}`,
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      site: "@e-estatesandtrusts",
      creator: "@e-estatesandtrusts",
      title: post.title,
      description: post.description,
      image: [
        {
          url: `${
            process.env.NEXT_PUBLIC_SERVER_URL ||
            "https://api.e-estatesandtrusts.com"
          }/api/files/posts/${post.id}/${post.featuredImage}`,
          width: 640,
          height: 75,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    
  };
  
}

const formatDate = (date) => {
  return format(new Date(date), "d MMMM yyyy");
};

export default async function Page({ params }) {
  const blog = await getSingleBlog({ slug: params.slug });
  return (
    <MarginWrapper>
      <div className="my-8">
        <div className="md:flex justify-center my-2 ">
          <Link
            href={
              blog.authorName
                .toLowerCase()
                .split(" ")
                .join("-")
                .startsWith("rebecca")
                ? "/author/rebecca-nichols"
                : "/author/katina-pantazis"
            }
            className=" text-[#085FA0] hover:text-[#2D89EF] font-Nunito font-semibold text-center "
          >
            By:{" "}
            {blog?.authorName.includes("Rebecca")
              ? "Rebecca L. Nichols, Esq."
              : "Katina H. Pantazis, Esq."}
          </Link>
          <div className="flex md:px-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                <line x1="16" y1="3" x2="16" y2="7"></line>
                <line x1="8" y1="3" x2="8" y2="7"></line>
                <line x1="4" y1="11" x2="20" y2="11"></line>
                <rect x="8" y="15" width="2" height="2"></rect>
              </svg>
              <p>Published at</p>
            </div>
            <p className="text-[#085FA0] font-Nunito px-2 ">
              {formatDate(blog?.publishedDate)}
            </p>
          </div>
        </div>
        <div className="my-6 leading-6 flex flex-col md:flex-row">
          <div className="sm:w-full md:w-[20%] md:px-10">
            <Share />
          </div>
          <div>
            <div className="blog-content">
              <div>
                <Image
                  width={1200}
                  height={800}
              
                  src={
                    blog?.featuredImage
                      ? `${
                          process.env.NEXT_PUBLIC_SERVER_URL ||
                          "https://api.e-estatesandtrusts.com"
                        }/api/files/posts/${blog.id}/${blog.featuredImage}`
                      : "/icons/defaultImage.png"
                  }
                  alt="feature image"
                />
              </div>
              {/* <Mdx code={blog.body.code} /> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: blog?.content,
                }}
              ></div>
            </div>
            {blog?.podcast && (
              <div>
                <h2 className="text-[18px] text-[#085FA0] font-Nunito py-2 font-bold">
                  To know more listen our podcast -
                </h2>
                <iframe
                  src={blog.podcast}
                  height="200px"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </div>
            )}

            <div className="contact-block w-[80%] mx-auto my-10  bg-[#0E497B] p-10">
              <p className=" text-center text-white text-[20px] font-semibold">
                Take the next step
              </p>
              <p className=" text-center text-white text-[18px] py-5 ">
                Our advisors will help to answer your questions — and share
                knowledge you never knew you needed — to get you to your next
                goal, and the next.
              </p>
              <div className="w-[100%] text-center">
                <Link href="/contact-us">
                  <button className="bg-[#FFB81C] p-3 font-semibold hover:bg-[#ffb71cdc]">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-4" />
        </div>
      </div>
    </MarginWrapper>
  );
}
