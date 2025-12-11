import Image from "next/image";
import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import CategoryFilter from "./CategoryFilter";

export const dynamic ='force-dynamic'

async function getBlogs() {
  const allBlogPosts = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/blogs",
    {
      cache: "no-store",
    }
  ).then((res) => res.json());
  return allBlogPosts;
}

const AllBlogs = async ({ BlogsCategory }) => {
  const allBlogPosts = await getBlogs();
  const formatDate = (date) => {
    return format(new Date(date), "d MMMM yyyy");
  };

  const getfilteredBlogs = (category) => {
    return allBlogPosts?.filter((blogs) => blogs.category.trim() == category);
  };
  const filteredBlogs = getfilteredBlogs(BlogsCategory);

  const category = filteredBlogs?.map((item) => item.category);

  return (
    <div>
      <div className="bg-[#EDF0F8] ">
        <div className="">
          <div className="flex justify-center">
            <h2 className="text-[#085FA0] text-center border-b-4 border-[#B5F66A] font-Saira py-4">
              Our Blogs
            </h2>
          </div>

          <div className="flex justify-center my-4 font-Nunito  text-[#085FA0] text-[18px] leading-tight">
            <p className="text-[18px] font-semibold px-4 lg:w-1/2 text-center text-[085FA0] font-Nunito">
              {`       Feeling overwhelmed by complex legal documents?  e-Estates and Trusts, PLLC's practical and concise blog posts on estate planning can light your way. Confused by the probate or trust administration process?  Our blog posts also address various topics that may impact you in your role as personal representative, executor, or trustee.  As a leading virtual law firm in Florida with trusted estate and trust attorneys, we are committed to providing our clients with zealous representation and guiding them through these complex processes.`}
            </p>
          </div>
          <hr className="mx-auto border-2 border-[#B5F66A]  w-1/5" />
        </div>
        <CategoryFilter />
        <div>
          <div className="">
            <div className="flex justify-center">
              <h2 className="text-[#085FA0] capitalize text-center border-b-4 text-[32px] border-[#B5F66A] font-Saira py-4">
                {category?.length > 0 ? category[0] : "All Blogs"}
              </h2>
            </div>
          </div>
          <div
            className={`  grid md:flex justify-center flex-wrap py-8 gap-6 `}
          >
            {(category?.length >= 1 ? filteredBlogs : allBlogPosts)?.map(
              (post) => (
                <div
                  key={post.title}
                  className="bg-white hover:shadow-2xl rounded-lg shadow-lg w-[300px]"
                >
                  <div>
                    <Link href={`blogs/${post.slug}`}>
                      <div>
                        <Image
                          style={{ objectFit: "fill" }}
                          className=" h-56  "
                          src={
                            post?.featuredImage
                              ? `${
                                  process.env.NEXT_PUBLIC_SERVER_URL ||
                                  "https://api.e-estatesandtrusts.com"
                                }/api/files/posts/${post.id}/${
                                  post.featuredImage
                                }`
                              : "/icons/defaultImage.png"
                          }
                          width={400}
                          height={400}
                          alt="thumbnail"
                        />
                      </div>

                      <div className="my-4 px-4">
                        <div className="flex justify-between  ">
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
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              ></path>
                              <rect
                                x="4"
                                y="5"
                                width="16"
                                height="16"
                                rx="2"
                              ></rect>
                              <line x1="16" y1="3" x2="16" y2="7"></line>
                              <line x1="8" y1="3" x2="8" y2="7"></line>
                              <line x1="4" y1="11" x2="20" y2="11"></line>
                              <rect x="8" y="15" width="2" height="2"></rect>
                            </svg>
                            <p className="text-sm px-2">Published at</p>
                          </div>
                          <p className="text-sm text-[#085FA0]">
                            {post?.publishedDate !== undefined
                              ? formatDate(post.publishedDate)
                              : null}
                          </p>
                        </div>

                        <h2 className="text-lg text-[#085FA0] py-2  mt-4 leading-6 font-Saira">
                          {post.title}{" "}
                        </h2>
                        <p className="text-sm text-ellipsis overflow-hidden line-clamp-2  ">
                          {post.description}
                        </p>
                        {/* <div className="flex justify justify-between my-4"> */}
                        <button className="bg-[#2D89EF] h-6  whitespace-nowrap text-[14px] px-2 text-[#FFFF] font-bold rounded-md">
                          Read more
                        </button>
                        <div className="flex mt-2">
                          <p className="text-sm whitespace-nowrap capitalize font-Nunito font-bold">
                            Category :
                          </p>{" "}
                          <p className="text-sm capitalize px-2 text-[#085FA0] font-semibold ">
                            {post.category}
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={
                        post.authorName
                          .toLowerCase()
                          .split(" ")
                          .join("-")
                          .startsWith("rebecca")
                          ? "/author/rebecca-nichols"
                          : "/author/katina-pantazis"
                      }
                      className="my-4 px-4 flex items-center hover:font-bold "
                    >
                      <Image
                        className="rounded-md"
                        src={
                          post?.authorImage
                            ? `${
                                process.env.NEXT_PUBLIC_SERVER_URL ||
                                "https://api.e-estatesandtrusts.com"
                              }/api/files/posts/${post.id}/${post.authorImage}`
                            : "/icons/defaultImage.png"
                        }
                        width={30}
                        height={20}
                        alt="arrow"
                      />
                      <div>
                        <p className="text-sm font-Nunito text-[#888] px-2">
                          Written by
                        </p>
                        <p className="text-sm text-[#085FA0] font-Nunito  my-auto px-2">
                          {post.authorName.includes("Rebecca")
                            ? "Rebecca L. Nichols, Esq."
                            : "Katina H. Pantazis, Esq."}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
