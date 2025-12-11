"use client";
import React, { useRef } from "react";
import MarginWrapper from "./marginWrapper";
import Image from "next/image";
import ReviewsCard from "./ReviewsCard";
import FeedBackCards from "./FeedBackCards";

const Testimonials = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const data = [
    {
      review: `Fantastic Experience.  Katina Pantazis, Esq. helped to create our wills, trust and health care power of attorney. We can now breathe easy knowing that she dotted every "I" and crossed every "T."  She didn't just stick to a prefabricated template; she set everything up to fit our family's exact needs and even took time to research laws in multiple states. While providing this excellent service, she was easily accessible and patient. She clearly explained all aspects of our legal paperwork and made sure his was exactly what we wanted.`,
      nameText: "Anonymous",
      openLink: "",
      starRating: 5,
    },
    {
      review: `Rebecca and her firm have helped me thru the whole probate process very quickly and effectively she knows all the Laws to get the probate thru the courts very quickly she got my whole process done start to finish in 3 months if anyone needs a great probate law firm she’s the one communicating within an hours time if I had a question and she always had an answer Rebecca is my goto lawyer from now on.
      Thank you Rebecca and your Firm.`,
      nameText: "David Glazer",
      openLink: "https://g.co/kgs/5qWESZ",
      starRating: 5,
    },
    {
      review: `Trusts, Living Wills created for my husband and I.  We needed to update and make our wills current and specific. Attorney Pantazis was professional at all times and was absolutely excellent when answering our questions, concerns, and in addressing specifications for our wills and future medical decisions if we were unable to communicate our desires in a medical situation. She was very thorough when answering our questions and adding requested information to the documents we needed to create. We highly recommend her when you need the legal services she offers.`,
      nameText: "Anonymous",
      openLink: "",
      starRating: 5,
    },
    {
      review: `My husband and I had our family trust and will done by Katina. We were so pleased with everything. She is very knowledgeable, helpful and personable....and costs were extremely reasonable!!! The staff was friendly and they have such a "can do" attutude.All the paperwork was done in a timely manner, as well. Highly recommend!!.`,
      nameText: "CAROLYN HARDIN",
      openLink: "",
      starRating: 5,
    },
    {
      review: `Katina Pantazis is an incredibly detailed and knowledgeable attorney and was able to explain all of the complicated ins and outs of estate planning in terms I understood in order to make an informed decision. I highly recommend this firm.`,
      nameText: "KINLEY CROTON",
      openLink: "",
      starRating: 5,
    },
    {
      review: `I have utilized advice from Katina Pantazis twice regarding my family's wills and estate planning. She has always been incredibly helpful, responsive and is a wealth of information! Highly recommend.`,
      nameText: "ALYSSA PERRONE",
      openLink: "",
      starRating: 5,
    },
    {
      review: `Katina Pantazis is a smart, thorough, and professional person. She has offered me sound legal advice for many years. I appreciate her attention to detail. `,
      nameText: "LINDSAY FISHER ",
      openLink: "",
      starRating: 5,
    },
    {
      review: `Great Trust and Will Attny!`,
      nameText: "CAROL TOMASELLI",
      openLink: "",
      starRating: 5,
    },
    {
      review: `I had a free phone consultation and she was very helpful.`,
      nameText: "KATHIE SKEDEL",
      openLink: "",
      starRating: 5,
    },
    {
      review: `Katina Pantazis is a professional whom truly cares about her clients and takes the time to find our their specific needs. I would not hesitate to recommend her services.`,
      nameText: "AMANDA MILLER",
      openLink: "",
      starRating: 5,
    },
    {
      review: `Great attorney who truly cares about her clients! `,
      nameText: "FINLEY WILLIAMS LAW FIRM ",
      openLink: "",
      starRating: 5,
    },
    {
      review: `Fantastic experience
      Katina helped to creat our wills and trusts and health care power of atterny. We can now breath easy knowing that she dotted every i and crossed evey t. She didn't just stick to a prefabricated template she set everything up to fit our families exact needs and even took time to research laws in multiple states. While providing this excellent service she was easily accessible and patient. She clearly explained all aspects of our legal paperwork and made sure his was exactly what we wanted.`,
      nameText: "Anonymous",
      openLink: "",
      starRating: 5,
    },
    {
      review: `Trusts, Living Wills created for my husband and I
      We needed to update and make our wills current and specific. Attorney Pantazis was professional at all times and was absolutely excellent when answering our questions, concerns, and in addressing specificiations for our wills and future medical decisions if we were unable to communicate our desires in a medical situation. She was very thorough when answering our questions and adding requested information to the documents we needed to create. We highly recommend her when you need the legal services she offers.`,
      nameText: "Anonymous",
      openLink: "",
      starRating: 5,
    },
  ];

  return (
    <div className="relative w-full ">
      <div className="absolute lg:w-1/2  bg-[#EDF0F8] h-full z-[-1] "></div>
      {/* <FeedBackCards/> */}
      <MarginWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div className="bg-[#EDF0F8]  ">
            <div className="p-4  ">
              <h2 className="text-[#085FA0]  font-Saira  text-[65px] leading-none">
                OUR CLIENT SAYS
              </h2>
              <p className=" border-[#B5F66A] my-4 border-[2px]  lg:w-[10%] w-[20%]"></p>
              <div>
                <p className="pt-8 font-Nunito font-semibold">
                  Our Previous Client
                </p>
                <p className="py-2 text-xl font-Nunito font-bold text-[#085FA0]">
                  A.R.
                </p>

                <div className="  py-4 md:py-0 ">
                  <p className="break-words font-Nunito py-2 lg:mr-[84px]">
                    Ms. Rebecca L. Nichols, Esq. , and the entire team at
                    e-Estates & Trusts, PLLC have provided my family with
                    consistently outstanding service. We live out of state and
                    needed a firm that could assist us remotely. They helped us
                    through the probate process and were never less than
                    entirely courteous, prompt, and efficient. More importantly,
                    they approached all of our questions strategically and
                    creatively, always finding the simplest and most economical
                    solutions to any questions we had. At every step in the
                    process they patiently explained all of our options and
                    never pressured us to make a decision. If you are in need of
                    legal assistance and are looking for a firm you can trust,
                    you won’t find better representation than e-Estates &
                    Trusts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex justify-center mt-16 lg:justify-start lg:-ml-20 lg h-[380px]">
            <Image
              style={{ objectFit: "cover" }}
              className="p-1 bg-[#085FA0] "
              src="/icons/judge-hand.jpg"
              height={500}
              width={500}
              alt="about us"
            />
          </div>
        </div>
      </MarginWrapper>
      <div>
        <div className="mt-20 bg-white">
          <MarginWrapper>
            <div className="p-6 lg:pt-16 ">
              <h1 className="text-[#085FA0] font-Saira  text-center md:text-start text-[45px] md:text-[65px] leading-none">
                {/* TOP- RATED TRUST ATTORNEY OCALA,FL */}
                {` TOP-RATED WILLS, TRUSTS & ESTATE ATTORNEYS`}
              </h1>
              <div className="flex justify-center md:justify-start">
                <div className="border-[#B5F66A]  mt-4  border-2 md:w-[4%] w-[20%]"></div>
              </div>
            </div>
          </MarginWrapper>

          <div className="relative top-24 md:mx-12 ">
            <div
              className=" scrollbar flex  justify-start overflow-x-scroll gap-16"
              ref={ref}
            >
              {data.map((item, index) => (
                <ReviewsCard
                  key={index}
                  paragraph={item.review}
                  url={item.openLink}
                  name={item.nameText}
                  index={index}
                  starRating={item.starRating}
                />
                //  <FeedBackCard paragraph={paragraphText} name={nameText} />
              ))}
            </div>
            <div className="flex justify-center py-2 ">
              <button
                aria-label="left-arrow"
                className="px-6"
                onClick={() => scroll(-400)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#B5F66A"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
              <button aria-label="right-arrow" onClick={() => scroll(400)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#B5F66A"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-40 bg-[#EDF0F8]"></div>
      </div>
    </div>
  );
};

export default Testimonials;
