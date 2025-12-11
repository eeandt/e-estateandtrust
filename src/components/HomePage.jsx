import Image from "next/image";

import React from "react";
import MarginWrapper from "./marginWrapper";
import Link from "next/link";

export const metadata = {
  title: "Estates, Probate, and Trust Attorney Firm Ocala, Fl",
  description:
    "e-Estates and Trusts offers virtual and concierge legal services. Best Estate Planning, Probate, and Trust Administration Attorney firm in Florida Ocala.",
};

const practiceAreasData = [{}];

const HomePage = () => {
  return (
    <div>
      <div className="">
        <div className="  w-full relative flex flex-col items-center">
          <Image
            priority
            style={{
              objectFit: "cover",
              objectPosition: "bottom",
            }}
            className="w-full h-[300px]  lg:h-[500px] bg-[#085FA0]"
            src="/icons/background.png"
            alt="Background Image"
            height={400}
            width={500}
          />
          <div className="absolute top-0 py-6  ">
            <div className="flex flex-col  md:py-6 lg:py-[4rem] items-center ">
              <p
                className="text-[40px] sm:text-[50px] break-words max-w-4xl px-6 font-Saira 
            leading-tight text-white  lg:text-[70px] 2xl:text-[75px] text-center"
              >
                Revolutionizing Wills, Trusts and Estates with You in Mind.
              </p>
              <p className=" border-[#B5F66A]  border-[1px] my-2 w-[50%] lg:w-[20%]"></p>

              <div className="lg:my-10 my-4 ">
                <Link
                  href="/contact-us"
                  className="mt-4 border-2 hover:text-white sm-text-[18px] border-[#B5F66A] py-3 px-8 font-Nunito  lg:text-[20px]  text-[#B5F66A] font-extrabold"
                >
                  SCHEDULE FREE CONSULTATION
                </Link>
                <div className="w-1/3 border-b-[5px] mt-[6px] border-[#B5F66A]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MarginWrapper>
        <div className="md:flex mb-12 mx-auto p-6">
          <div className="flex justify-center">
            <div className="h-70 w-72 p-10 shadow-2xl rounded-sm relative bottom-[38px] lg:bottom-12 bg-[#FFFF] ">
              <h2
                className=" text-[#085FA0] text-[65px] font-Saira py-4 "
                style={{ lineHeight: 1 }}
              >
                PRACTICE AREAS
              </h2>
              <p className=" border-[#B5F66A] my-2 font-Nunito border-[2px] w-[30%]"></p>
              <p className=" py-2">
                The attorneys at e-Estates and Trusts provide a wide range of
                virtual and concierge legal services.
              </p>
            </div>
          </div>
          <MarginWrapper>
            <div className="grid mt-12  md:mt-16 grid-cols-2  justify-center gap-x-8 gap-y-8 md:grid-cols-3 lg:px-7 md:pl-6 lg:gap-x-36  ">
              <div>
                <Link
                  className="w-32 flex items-start hover:text-[#085FA0] hover:font-bold"
                  href={"/estate-planning"}
                >
                  <Image
                    src="/icons/estatePlanning.png"
                    alt="estatePlanning image"
                    width={34}
                    height={34}
                  />
                  <p className="text-sm ml-2 font-Nunito">Estate Planning</p>
                </Link>
              </div>
              <div>
                <Link
                  className="w-32 flex items-start hover:text-[#085FA0] hover:font-bold"
                  href={"/estate-planning#Power-of-Attorney"}
                >
                  <Image
                    src="/icons/attorney.svg"
                    alt="power of Attorney"
                    width={34}
                    height={34}
                  />
                  <p className="text-sm ml-2 font-Nunito">Power of Attorney</p>
                </Link>
              </div>
              <div>
                <Link
                  className="w-32 flex items-start hover:text-[#085FA0] hover:font-bold"
                  href={"/probate"}
                >
                  <Image
                    src="/icons/probateAdmin.svg"
                    alt="probate Administration"
                    width={34}
                    height={34}
                  />
                  <p className="text-sm ml-2 font-Nunito">
                    Probate Administration
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  className="w-32 flex hover:text-[#085FA0] hover:font-bold items-start"
                  href={"/trust-administration"}
                >
                  <Image
                    src="/icons/trustAdmin.png"
                    alt="Trust Administration"
                    width={34}
                    height={34}
                  />
                  <p className="text-sm ml-2 font-Nunito">
                    Trust Administration
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  className="w-32 hover:text-[#085FA0] hover:font-bold flex items-start"
                  href={"/trust-administration"}
                >
                  <Image
                    src="/icons/trust.svg"
                    alt="trust"
                    width={34}
                    height={34}
                  />
                  <p className="text-sm ml-2 font-Nunito">Trust</p>
                </Link>
              </div>

              <div>
                <Link
                  className="w-32 hover:text-[#085FA0] hover:font-bold flex items-start"
                  href={"/estate-planning"}
                >
                  <Image
                    src="/icons/leavingWill.svg"
                    alt="Living Will"
                    width={34}
                    height={34}
                  />
                  <p className="text-sm ml-2 font-Nunito">Living Will</p>
                </Link>
              </div>

              <div>
                <Link
                  className="w-32 hover:text-[#085FA0] hover:font-bold flex items-start"
                  href={"/estate-planning#last-will-and-testament"}
                >
                  <Image
                    src="/icons/leastWill.svg"
                    alt="LastWill & Testament"
                    width={34}
                    height={34}
                  />
                  <p className="text-sm ml-2 font-Nunito">
                    Last Will & Testament
                  </p>
                </Link>
              </div>

              <div>
                <Link
                  className="w-32 hover:text-[#085FA0] hover:font-bold flex items-start"
                  href={"/estate-planning#Designation-of-Pre-Need-Guardian"}
                >
                  <Image
                    src="/icons/preNeedGurdian.svg"
                    alt="Designation of Pre-Need Guardian"
                    width={34}
                    height={34}
                  />
                  <p className="text-sm ml-2 font-Nunito">
                    Designation of Pre-Need Guardian
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  className="w-32 hover:text-[#085FA0] hover:font-bold flex items-start"
                  href={"/estate-planning#Designation-of-Health-Care-Surrogate"}
                >
                  <Image
                    src="/icons/surrogate.svg"
                    alt="Designation of Health Care Surrogate"
                    width={34}
                    height={34}
                  />
                  <p className="text-sm ml-2 font-Nunito">
                    Designation of Health Care Surrogate
                  </p>
                </Link>
              </div>
            </div>
          </MarginWrapper>
        </div>
      </MarginWrapper>
    </div>
  );
};

export default HomePage;
