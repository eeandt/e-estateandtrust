import React from "react";
import MarginWrapper from "./marginWrapper";
import Image from "next/image";

const FeedBackCards = () => {
  const name = "Merry thomas";
  const feedBack = `A.R., Client. Ms. Rebecca L. Nichols, Esq., and the entire team at e-Estates & Trusts, PLLC have provided my family with consistently outstanding service.  We live out of state and needed a firm that could assist us remotely.  They helped us through the probate process and were never less than entirely courteous, prompt, and efficient.  More importantly, they approached all of our questions strategically and creatively, always finding the simplest and most economical solutions to any questions we had.  At every step in the process they patiently explained all of our options and never pressured us to make a decision.  If you are in need of legal assistance and are looking for a firm you can trust, you won’t find better representation than e-Estates & Trusts`;
  const data = [
    {
      name:name,
      feedBack,
    },

  ];
  return (
    <>
      {data.map((item, index) => (
        <MarginWrapper key={item}>
        

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center ">
            <div className="bg-[#EDF0F8] h-[400px] ">
              <div className="p-4  ">
                <h1 className="text-[#085FA0]  font-Saira  text-[65px] leading-none">
                  OUR CLIENT SAYS
                </h1>
                <p className=" border-[#B5F66A] my-4 border-[2px]  lg:w-[10%] w-[20%]"></p>
                <div>
                  <p className="pt-8 font-Nunito font-semibold">
                    Designation Director
                  </p>
                  <p className="py-2 text-xl font-Nunito font-bold text-[#085FA0]">
                    {item.name}
                  </p>

                  <div className="  py-4 md:py-0 lg:w-1/2">
                    <p className="break-words font-Nunito py-2">
                      {item.feedBack}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex justify-center mt-16 lg:justify-start lg:-ml-20 lg h-[380px]">
              <Image
                className="p-8 bg-[#085FA0] "
                src="/icons/testimonials.png"
                height={500}
                width={500}
                alt="about us"
                />
            </div>
          </div>
               
        </MarginWrapper>
      ))}
    </>
  );
};

export default FeedBackCards;
