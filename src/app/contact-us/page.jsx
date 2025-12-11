import React from "react";
import MarginWrapper from "../../components/marginWrapper";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { BsTwitterX } from "react-icons/bs";

export const metadata = {
  title: "Contact Trust Administration Lawyer Today | e-EstatesandTrusts",
  description:
    "Need a Probate and Trust administration lawyer, Contact e-Estates and Trusts, PLLC today.  3035 SE Maricamp Rd. #104-411. Ocala, FL 34471. Phone: 352-600-2987.",
  alternates: {
    canonical: "https://www.e-estatesandtrusts.com/contact-us",
  },
  openGraph: {
    title: "Contact Trust Administration Lawyer Today | e-EstatesandTrusts",
    description:
      "Need a Probate and Trust administration lawyer, Contact e-Estates and Trusts, PLLC today.  3035 SE Maricamp Rd. #104-411. Ocala, FL 34471. Phone: 352-600-2987.",
    url: "https://www.e-estatesandtrusts.com/contact-us",
    siteName: "e-Estates and Trusts, PLLC ",
    images: [
      {
        url: "https://www.e-estatesandtrusts.com/icons/banner-inner.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const Page = () => {
  const emails = ["contact@e-estatesandtrusts.com"];

  return (
    <div className="">
      <div
        className="items-center w-full"
        style={{
          backgroundImage: "url(/icons/banner-inner.png) ",
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <MarginWrapper>
          <h1 className="text-[#085FA0] w-1/2 py-6 font-Saira text-[24px] md:text-[32px] lg:text-[40px]">
            Prepare for Your Future Now by Meeting with our Experienced Wills,
            Trusts, and Estates Attorneys in Florida.
          </h1>
        </MarginWrapper>
      </div>
      <MarginWrapper>
        <div className="my-10 ">
          <div className="bg-[#EDF0F8]">
            <div
              // style={{ boxShadow: "2px 2px 2px #2d96fd" }}
              className="py-16 px-4 lg:flex lg:flex-row-reverse justify-center items-center "
            >
              <div className="rounded-sm my-8 p-12 px-8 py-16  shadow-2xl bg-[#FFF]">
                <div className="lg:px-24   ">
                  <h2 className=" text-[#085FA0] px-4 text-center  font-Saira text-[45px] leading-10 font-bold">
                    Drop us a Message
                  </h2>
                  <p className="text-center px-4  text-[#1F2E4D] font-Saira text-lg">
                    Related to your Estates & Trusts queries
                  </p>
                  <ContactForm />
                </div>
              </div>
              <div
                // style={{ boxShadow: "2px 2px 20px #085FA0" }}
                className=" p-6 py-12 lg:w-[346px] lg:relative left-20 rounded-sm bg-[#1F2E4D]  "
              >
                <h2 className="text-[#FFFF] font-Saira text-[45px] leading-none">
                  Get in Touch
                </h2>
                {/* <p className=" py-2 font-Nunito text-[#fff] font-semibold   text-[18px]">Choose E-estates and Trusts today for a better future tommorow</p> */}
                <div className="mt-4 ">
                  <p className="font-Nunito font-bold text-[#FFFF] text-[20px]">
                    Email:
                  </p>
                  {emails.map((item) => (
                    <div key={item}>
                      <Link
                        className="flex gap-2 items-center"
                        href={`mailto:${item}`}
                      >
                        <Image
                          className=""
                          src="/icons/contactmail.svg"
                          width={25}
                          height={25}
                          alt="footerLogo"
                        />
                        <p className="font-Nunito  text-[16px] py-2  text-[#FFFF]">
                          {item}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
                <div>
                  <Link className="flex py-2 gap-2" href="tel:352-600-2987">
                    <Image
                      className=""
                      src="/icons/contact.svg"
                      width={25}
                      height={25}
                      alt="footerLogo"
                    />
                    <p className="font-Nunito text-[16px]  text-[#FFFF] ">
                      352-600-2987
                    </p>
                  </Link>
                </div>

                <div className="flex gap-2">
                  <Image
                    className=""
                    src="/icons/location.svg"
                    width={25}
                    height={25}
                    alt="footerLogo"
                  />
                  <p className=" text-[16px] font-Nunito  text-[#FFFF]">
                    3035 SE Maricamp Rd. #104-411 Ocala, FL 34471
                  </p>
                </div>
                <div className="flex  my-4 rounded-lg p-4 gap-5 ">
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/eestatesandtrustspllc"
                  >
                    <Image
                      className=""
                      src="/icons/fb.svg"
                      width={30}
                      height={30}
                      alt="footerLogo"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href=" https://www.instagram.com/e_estatesandtrusts/"
                  >
                    <Image
                      className=""
                      src="/icons/insta.svg"
                      width={30}
                      height={30}
                      alt="footerLogo"
                    />
                  </Link>

                  <Link target="_blank" href=" https://twitter.com/e_trusts">
                    {/* <Image
                      className=""
                      src="/icons/twitter.svg"
                      width={30}
                      height={30}
                      alt="footerLogo"
                    /> */}

                    <div className="flex items-center text-xs text-white border rounded-full p-2   ">
                      <BsTwitterX />
                    </div>
                  </Link>

                  <Link
                    target="_blank"
                    href="https://www.youtube.com/@e-EstatesandTrusts"
                  >
                    <Image
                      className=""
                      src="/icons/youtube.svg"
                      width={30}
                      height={30}
                      alt="footerLogo"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MarginWrapper>
      <div className="m-6 ">
        <iframe
          title="locationMap"
          className="w-full shadow-xl rounded-md  "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.9768690567153!2d-82.09688352361688!3d29.165353875377892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7d32339740865%3A0x679abe061362fdf3!2s3035%20SE%20Maricamp%20Rd%20%23104-411%2C%20Ocala%2C%20FL%2034471%2C%20USA!5e0!3m2!1sen!2sin!4v1696661131894!5m2!1sen!2sin"
          width="800"
          height="600"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;
