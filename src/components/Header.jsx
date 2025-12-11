import Image from "next/image";
import React from "react";
import MenuBar from "./MenuBar";
import MarginWrapper from "./marginWrapper";
import Link from "next/link";
import CallButton from "./CallButton";
const Header = () => {
  return (
    <div>
      <div className="w-full h-auto bg-gradient-to-r from-[#80e210b4] via-[#b4ff33c0] to-[#80e210b4]">
        <MarginWrapper>
          <div className=" md:flex md:py-4 justify-between   py-2 ">
            <div className="flex items-center justify-center  ">
              <CallButton />

              <div >
                <Link className="flex items-center hover:text-[#085FA0]" href="mailto:contact@e-estatesandtrusts.com">
                  <Image
                    className="w-4 h-4 mx-2"
                    src="/icons/headerMail.svg"
                    width={32}
                    height={32}
                    alt="Email icon"
                  />
                <p className="text-xs font-Nunito lg:text-[16px]">
                  contact@e-estatesandtrusts.com
                </p>
                </Link>
              </div>
            </div>
            <Link href="https://maps.app.goo.gl/Vdz1Vz15bJdV22Hf9 
" target="_blank" className="flex justify-center items-center py-2 hover:text-[#085FA0]">
              <Image
                className="w-4 mx-2 h-4 "
                src="/icons/headerLocation.svg"
                width={30}
                height={30}
                alt="Location image"
              />
              <p className="text-xs font-Nunito lg:text-[16px]">
                3035 SE Maricamp Rd. #104-411 Ocala, FL 34471
              </p>

            </Link>
          </div>
        </MarginWrapper>
      </div>
      <div className="my-6 grid justify-center">
        <Link href="/" className="text-center"> 
   
        {/* <div className="flex justify-center"> */}
          {/* <div> */}
            <Image
              className=""
              src="/icons/headerLogo.svg"
              width={250}
              height={250}
              alt="logo"
              priority
            />
          {/* </div> */}
        {/* </div> */}
        {/* <div className="flex justify-center mt-1"> */}
          <Image
            className="mt-1"
            src="/icons/headerLogoText.svg"
            width={250}
            height={250}
            alt="logo"
            priority
          />
        {/* </div> */}
        </Link>
      </div>
      <MenuBar />
    </div>
  );
};

export default Header;
