"use client";
import Image from "next/image";
import React from "react";
import MarginWrapper from "../../components/marginWrapper/index";
import Link from "next/link";
import { EmailShareButton } from "react-share";

const Author = ({ data, articles }) => {
  const aboutData = data.map((el) => el.about.split("."));

  return (
    <>
      <MarginWrapper>
        <div className="main-container min-[900px]:flex">
          {data?.map((item, idx) => (
            <div
              className="first-section max-h-[100vh]  min-[900px]:sticky top-0 bg-[#085ea015] px-5 w-full min-[900px]:w-[25%]  overflow-y-scroll "
              key={idx}
            >
              <div className="text-center">
                <Image
                  src={item.profileImage}
                  width={100}
                  height={100}
                  priority
                  unoptimized
                  className="rounded-full mx-auto overflow-hidden object-cover w-[200px] h-[200px] my-4 object-top"
                  alt="rebecca_image"
                />
                <p className="text-xl  font-semibold ">{item.authorName}</p>
                <p
                  className="text-[#085FA0]"
                  dangerouslySetInnerHTML={{ __html: item.designation }}
                ></p>
                <div className="mt-8">
                  <a
                    href={`mailto:${item.email}`}
                    className=" px-8 py-3 font-medium hover:opacity-80 my-4 bg-[#085FA0]  text-white rounded-lg"
                  >
                    Email Author
                  </a>
                </div>
              </div>

              <div className="information text-left my-5 flex flex-col  gap-5 mx-5 ">
                <div>
                  <p className="text-xl  font-bold">Company</p>
                  <Link href={`${item.companyLink}`} target="_blank">
                    <p className="my-2 text-[#085FA0] font-medium">
                      {item.companyName}
                    </p>
                  </Link>
                </div>

                <div>
                  <p className="text-xl    font-bold">Find Me</p>

                  <div className="my-2 flex gap-3 items-center justify-start">
                    {item.findMe?.map((item, idx) => (
                      <Link href={`${item.url}`} target="_blank" key={idx}>
                        <Image
                          src={`${item.icon}`}
                          width={100}
                          height={100}
                          priority
                          className="rounded-full hover:opacity-80  w-[60px] h-[60px] cursor-pointer"
                          alt="rebecca_image"
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="expertise ">
                  <p className="text-xl    font-bold">Expertise</p>

                  <div className="my-3   flex gap-3 flex-wrap ">
                    {item.expertise.map((item, idx) => (
                      <p
                        className=" bg-[#085ea054] rounded-md text-[18px]  px-3 text-[#085FA0] font-semibold "
                        key={idx}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="second-section  py-10 min-[900px]:w-[75%]  ">
            <p className="text-2xl  min-[900px]:mx-10  font-semibold border-b-4 border-[#085FA0] w-[5%] pb-2 ">
              ABOUT
            </p>

            <div className="about-content text-left py-4">
              {aboutData[0]?.map((item) => (
                <p
                  className="min-[900px]:mx-10 min-[900px]:my-2 my-5 font-Nunito leading-6"
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>

            <div className="articles-content">
              <p className="text-3xl  min-[900px]:mx-10  font-semibold uppercase  border-b-4 border-[#085FA0] w-[5%] pb-2  ">
                Articles
              </p>

              <div className="blogs-card-container min-[900px]:grid grid-cols-2   min-[900px]:px-10 py-10 ">
                {articles?.map((item, idx) => (
                  <Link href={`/blogs/${item.slug}`} key={idx}>
                    <div className="blog-card  min-[900px]:w-[90%]  text-left pb-10 ">
                      <Image
                        src={
                          item?.featuredImage
                            ? `${
                                process.env.NEXT_PUBLIC_SERVER_URL ||
                                "https://api.e-estatesandtrusts.com"
                              }/api/files/posts/${item.id}/${
                                item.featuredImage
                              }`
                            : "/icons/defaultImage.png"
                        }
                        width={100}
                        height={100}
                        priority
                        unoptimized
                        alt="blog_image"
                        className=" mx-auto overflow-hidden object-cover w-[100%] h-[200px]   my-2 object-top"
                      />
                      <p className="description py-4 text-[24px] text-[#085FA0] font-Saira ">
                        {item.title}
                      </p>

                      <p className="line-clamp-2">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MarginWrapper>
    </>
  );
};

export default Author;
