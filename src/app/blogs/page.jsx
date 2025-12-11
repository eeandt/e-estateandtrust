import AllBlogs from "@/components/AllBlogs";
import React from "react";
import MarginWrapper from "../../components/marginWrapper";

export const dynamic ='force-dynamic'

export const metadata = {

  title: "Insightful Blogs on Estate & Trusts - e-EstatesAndTrusts",
  description:
    "Dive into our blogs focusing on estate planning, probate, trust administration helping executors, trustees with legal matters.",
  alternates: {
    canonical: "https://www.e-estatesandtrusts.com/blogs",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {

    title: "Insightful Blogs on Estate & Trusts - e-EstatesAndTrusts",
    description:
    "Dive into our blogs focusing on estate planning, probate, trust administration helping executors, trustees with legal matters.",
  url: "https://www.e-estatesandtrusts.com/blogs",
    siteName: "e-Estates and Trusts, PLLC ",
    images: [{ url: "https://www.e-estatesandtrusts.com/icons/headerLogo.svg" , width: 1200, height: 630
 }],
  },
  twitter: {
    card: "summary",
    site: "@e-Estates and Trusts, PLLC",
    creator: "@e_trusts",
    title: "Insightful Blogs on Estate & Trusts - e-EstatesAndTrusts",
    description:
    "Dive into our blogs focusing on estate planning, probate, trust administration helping executors, trustees with legal matters.",
    image: [
      {
        url: "https://www.e-estatesandtrusts.com/icons/headerLogo.svg" ,
        width: 640,
        height: 75,
      },
    ],
  },
};

const Page = ({searchParams}) => {
  return (
    <div>
      <link rel="canonical" href="https://www.e-estatesandtrusts.com/blogs"></link>
      <div className=" font-Nunito text-[28px]">
        <div className=" blog-banner h-full items-center md:h-60  w-full flex ">
          <MarginWrapper>
            <div className="my-6 md:my-0">
              <h1 className="text-[#FFF] font-Saira text-[45px] font-extrabold">
               CLIENT RESOURCES 
              </h1>
            </div>
          </MarginWrapper>
        </div>
        <AllBlogs BlogsCategory={searchParams?.category}/>
      {/* <CategoryFilter/>
        {/* <ClientResouces /> */}
      </div>
    </div>
  );
};

export default Page;
