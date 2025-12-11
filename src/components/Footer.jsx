import Image from "next/image";
import React, { Suspense } from "react";
import MarginWrapper from "./marginWrapper";
import Link from "next/link";
import TopReadsBlogs from "./TopReadsBlogs";
import { BsTwitterX } from "react-icons/bs";

const Footer = async () => {
  // #TODO : get latest two Blogs from pocketbase
  // const latestBlogs= await pb.collection("posts").getList(1,2,{
  //   filter:"isPublished=true",
  //   sort:"-created"
  // })

  // const Blogs = allPosts.sort((a, b) => {
  //   const dateA = new Date(a.date);
  //   const dateB = new Date(b.date);
  //   return dateB - dateA;
  // });
  // const topBlogs = Blogs.slice(0, 2);

  

  return (
    <div className="border-t-8 mt-10 border-t-[#B5F66A] ">
      <div className="bg-[#1F2E4D] p-6 ">
        <MarginWrapper>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <div className="lg:w-1/3 py-4">
              <p className="text-[#FFFFFF] font-Saira  text-[24px] ">
                Top Reads
              </p>
             

              <Suspense
                fallback={
                 [Array.from({ length: 2 }, (_, i) => (
                  <div class="shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                      <div class="h-2 bg-slate-700 rounded"></div>
                      <div class="space-y-3">
                        <div class="h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
                 ))]
                }
              >
                <TopReadsBlogs />
              </Suspense>
            </div>

            <div className="flex flex-col items-center lg:w-1/3 py-4">
              <Link href={"/"}>
                <Image
                  className=""
                  src="/icons/footerLogo.svg"
                  width={200}
                  height={220}
                  alt="footerLogo"
                />
              </Link>
              <p className=" border-[#FFFF] my-6 opacity-5 border-[0.5px] w-[50%] "></p>

              <div className="flex gap-5 ">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/eestatesandtrustspllc"
                >
                  <Image
                    className=" hover:opacity-50"
                    src="/icons/fb.svg"
                    width={30}
                    objectFit="cover"
                    height={30}
                    alt="footerLogo"
                  />
                </Link>
                <Link
                  target="_blank"
                  href=" https://www.instagram.com/e_estatesandtrusts/"
                >
                  <Image
                    className=" hover:opacity-50"
                    src="/icons/insta.svg"
                    width={30}
                    height={30}
                    alt="footerLogo"
                  />
                </Link>

                <Link target="_blank" href=" https://twitter.com/e_trusts">
               <div className="flex items-center text-xs text-white border rounded-full p-2 text-brand_light_green  hover:opacity-50">
                      <BsTwitterX />
                    </div>
                </Link>

                <Link
                  target="_blank"
                  href="https://www.youtube.com/@e-EstatesandTrusts"
                >
                  <Image
                    className=" hover:opacity-50"
                    src="/icons/youtube.svg"
                    width={30}
                    height={30}
                    alt="footerLogo"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-1/3 py-4">
              <p className="text-[#FFFFFF] text-lg font-Nunito">Get in Touch</p>
              <div className="">
                <Link className="flex gap-2" href="tel:352-600-2987">
                  <Image
                    className=""
                    src="/icons/contact.svg"
                    width={25}
                    height={25}
                    alt="footerLogo"
                  />
                  <p className="text-[#FFFFFF] hover:text-[#86E21B] font-Nunito">
                    352-600-2987
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  className=" flex gap-2 items-center"
                  href="mailto:contact@e-estatesandtrusts.com"
                >
                  <Image
                    className=""
                    src="/icons/contactmail.svg"
                    width={25}
                    height={25}
                    alt="footerLogo"
                  />
                  <p className="text-[#FFFFFF] hover:text-[#86E21B] font-Nunito">
                    contact@e-estatesandtrusts.com
                  </p>
                </Link>
              </div>
              <Link
                href={"https://maps.app.goo.gl/Vdz1Vz15bJdV22Hf9"}
                target="_blank"
                className="flex gap-2 "
              >
                <Image
                  className=""
                  objectFit="cover"
                  src="/icons/location.svg"
                  width={25}
                  height={25}
                  alt="footerLogo"
                />
                <p className="text-[#FFFFFF] hover:text-[#86E21B]  font-Nunito">
                  3035 SE Maricamp Rd. #104-411 Ocala, FL 34471
                </p>
              </Link>
            </div>
          </div>
          <div className="border-[#FFFF] my-6 opacity-5 border-[0.5px]  w-full"></div>
          <div className="">
            <p className="text-[#FFFFFF] text-sm   font-Nunito  ">
              <strong>Disclosure: </strong>The information contained in this
              website and blog is of a general nature and is not intended in any
              way to answer individual legal questions. If you have a legal
              question concerning your individual circumstances, please contact
              our firm to schedule a conference with one of our experienced
              attorneys. Your review of information from this website or blog
              does not create an attorney-client relationship, nor any legal
              privileges relating thereto. Offices in Ocala and Sebring.
            </p>
          </div>
        </MarginWrapper>
      </div>
      <div className="bg-[#061534] py-6 w-full">
        <MarginWrapper>
          <div className="md:flex justify-between">
            <p className="text-[#FFFFFF] text-sm  opacity-[0.5]  font-Nunito">
              ©Copyright 2025 by <Link href={"/"}>e-estatesandtrusts.com</Link>{" "}
              All Rights Reserved.
            </p>
            <div className="flex  items-center">
              <p className="text-[#FFFFFF] text-sm opacity-[0.5] py-2 md:py-0 font-Nunito">
                Design By
              </p>
              <Link
                // style={{filter: drop-shadow(0 0 0.75rem crimson);}}
                style={{ textShadow: "2px 2px 20px #085FA0" }}
                className=" text-[#FFFFFF] text-sm px-2 font-bold"
                target="_blank"
                href="https://www.delightwebdesigns.com/"
              >
                Delight web Designs
              </Link>
            </div>
          </div>
        </MarginWrapper>
      </div>
    </div>
  );
};

export default Footer;
