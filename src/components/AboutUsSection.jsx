import Image from "next/image";
import React from "react";
import MarginWrapper from "./marginWrapper";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <div>
      <div className="bg-[#EDF0F8] my-16 ">
        <MarginWrapper>
          <div className="p-4 py-14 ">
            <h2 className="text-[#085FA0] font-Saira text-[65px]">ABOUT US</h2>
            <p className=" border-[#B5F66A] my-4 border-[2px]  lg:w-[4%] w-[20%]"></p>
            <div className="lg:flex gap-24 items-center ">
              <div className=" lg:w-1/2 py-4 md:py-0 ">
                <p className="break-words font-Nunito py-2">
                  e-Estates and Trusts, PLLC is a law firm offering virtual and
                  concierge legal services in the areas of{" "}
                  <Link className="" href={"/estate-planning"}>
                    {" "}
                    estate planning,
                  </Link>
                  probate administration, and trust administration to clients
                  throughout Florida. We also serve clients whose loved one
                  passed away while residing in Florida or owning assets located
                  in Florida.
                </p>

                <p className="break-words font-Nunito py-2">
                  Here at e-Estates and Trusts, PLLC, our{" "}
                  <Link className="" href={"/"}>
                  attorneys
                  </Link>{" "}
                  are dedicated to providing you with compassionate, quality
                  legal representation without disrupting your day-to-day
                  routine.
                </p>

                <p className="break-words font-Nunito py-2">
                  By providing virtual and concierge legal services, our law
                  firm has been designed to expedite and streamline our
                  processes, increase efficiency, facilitate convenient
                  communication via email and our secure cloud-based client
                  portal, and decrease unnecessary overhead expenses, all to
                  provide clients with high-quality, individualized legal
                  representation for an excellent value.
                </p>

                <p className="break-words font-Nunito py-2">
                  Our attorneys have a combined 25 years of experience guiding
                  clients through numerous legal issues, including the maze of{" "}
                  <Link className="" href={"/probate"}>
                    Probate administrations,
                  </Link>{" "}
                  trust administrations, and estate planning.
                </p>
              </div>
              <div className="flex justify-center mt-6 h-fit lg:mt-0 ">
                <Image
                  src="/icons/about-us-img.jpg"
                  height={350}
                  width={350}
                  alt="about us"
                />
              </div>
            </div>
          </div>
        </MarginWrapper>
      </div>
      <div className=" flex justify-center h-full w-full ">
      <iframe
            width="800"
            height="400"
            className="mx-4 md:mx-0 mb-16"
            src="https://www.youtube.com/embed/CO9PigMarkY"
            title="Trust Attorneys Ocala FL | e-Estates and Trusts"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
      </div>
    </div>
  );
};

export default AboutUsSection;
