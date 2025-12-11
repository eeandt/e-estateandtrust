import React from "react";
import Link from "next/link";
import MarginWrapper from "../../components/marginWrapper";
import { FaLongArrowAltRight } from "react-icons/fa";
export const metadata = {
  title: "Resources for Estate and Trust Administration | E-EstatesAndTrusts",
  description:
    "Find important links & resources for fiduciaries, estate administrators, and trustees. We provide aid with aging & county-specific information in Florida.",
  alternates: {
    canonical: "https://www.e-estatesandtrusts.com/resources",
  },
  openGraph: {
    title: "Resources for Estate and Trust Administration | E-EstatesAndTrusts",
    description:
    "Find important links & resources for fiduciaries, estate administrators, and trustees. We provide aid with aging & county-specific information in Florida.",
    url: "https://www.e-estatesandtrusts.com/resources",
    siteName: "e-Estates and Trusts, PLLC ",
    images: [{ url: "https://www.e-estatesandtrusts.com/icons/headerLogo.svg" ,  width: 1200, height: 630}],
  },
  twitter: {
    card: "summary",
    site: "@e-Estates and Trusts, PLLC",
    creator: "@e_trusts",
    title: "Resources for Estate and Trust Administration | E-EstatesAndTrusts",
    description:
    "Find important links & resources for fiduciaries, estate administrators, and trustees. We provide aid with aging & county-specific information in Florida.",
    image: [
      {
        url: "https://www.e-estatesandtrusts.com/icons/headerLogo.svg" , 
        width: 640,
        height: 75,
      },
    ],
  },
};
const page = () => {

  const ClientResoucesData = [
    {
      heading: "Learn More:",
      link: [
        {
          title: "Revocable Living Trust",
          href: "/estate-planning#Revocable-Living-Trust",
        },
        {
          title: "Estate Planning ",
          href: "https://www.youtube.com/watch?v=cRkECHOUwrU",
        },
        {
          title: "Living Will",
          href: "/estate-planning#Living-Will",
        },
        {
          title: "How Seniors Can Protect Their Homes",
          href: "https://www.youtube.com/watch?v=qvyYJGpoUps",
        },
      ],
    },

    // {heading:"Client Questionnaires:",
    // link:[{
    //   title:"Estate Planning (Individual)",
    //   href:"/wp-content/uploads/2022/12/Questionnaire-Individual-Representation.pdf"
    // },{
    //   title:"Estate Planning (Legal Couple)",
    //   href:"https://e-estatesandtrusts.com/wp-content/uploads/2022/12/Questionnaire-Married-Representation.pdf"
    // },{
    //   title:"Trust Administration",
    //   href:"https://e-estatesandtrusts.com/wp-content/uploads/2022/12/2.-Probate-Questionnaire.pdf"
    // },{
    //   title:"Probate Administration",
    //   href:"https://e-estatesandtrusts.com/wp-content/uploads/2022/12/2.-Probate-Questionnaire.pdf"
    // }]

    // },
    {
      heading: "Important Links:",

      link: [
        {
          title: "Administration on Aging",
          href: "https://acl.gov/",
        },
        {
          title: "Aging Resources",
          href: "https://agingresources.org/",
        },
        {
          title: "Alzheimer’s Association",
          href: "https://www.alz.org/",
        },
      ],
    },

    {
      heading: "Executor Exchange:",
      link: [
        {
          title: "Referral Resources for Fiduciaries :-",
          href: "https://executorexchange.com/",
        },
        {
          title: "Personal Representative",
          href: "https://executorexchange.com/",
        },
        {
          title: "Trustee",
          href: "https://executorexchange.com/",
        },
        {
          title: "Agents",
          href: "https://executorexchange.com/",
        },
      ],
    },

    {
      heading: "Florida State Official Records:",
      link: [
        {
          title: "Official Records",
          href: "https://www.myfloridacounty.com/official_records/index.html?thisPage=MyFloridaCounty.ORI.Order.state.Start",
        },
        {
          title: "Florida State Public Notices",
          href: "https://floridapublicnotices.com/",
        },
        {
          title: "Social Security",
          href: "https://www.ssa.gov/",
        },
        {
          title: "Veteran’s Administration",
          href: "https://www.va.gov/",
        },
      ],
    },
    {
      heading: "Hardee County:",
      link: [
        {
          title: "Clerk of Courts",
          href: "http://www.hardeeclerk.com",
        },
        {
          title: "Property Appraiser",
          href: "https://hardeepa.com/",
        },
        {
          title: "Tax Collector",
          href: "https://www.hardeecountytaxcollector.com//Property/SearchSelect?Accept=true&ClearData=True",
        },
      ],
    },
    {
      heading: "Highlands County:",
      link: [
        {
          title: "Clerk of Courts",
          href: "https://highlandsclerkfl.gov/",
        },
        {
          title: "Property Appraiser ",
          href: "https://www.hcpao.org/",
        },
        {
          title: "Tax Collector",
          href: "https://www.hctaxcollector.com/",
        },
      ],
    },
    {
      heading: "Lake County:",
      link: [
        {
          title: "Clerk of Courts",
          href: "https://www.lakecountyclerk.org/",
        },
        {
          title: "Property Appraiser ",
          href: "https://www.lakecopropappr.com/",
        },
        {
          title: "Tax Collector",
          href: "https://laketax.com/",
        },
      ],
    },
    {
      heading: "Marion County:",
      link: [
        {
          title: "Clerk of Courts",
          href: "https://www.marioncountyclerk.org/contact/public-records-request/",
        },
        {
          title: "Property Appraiser ",
          href: "http://www.pa.marion.fl.us/",
        },
        {
          title: "Tax Collector",
          href: "https://www.mariontax.com/",
        },
      ],
    },
    {
      heading: "Polk County:",
      link: [
        // {
        //   title: "Clerk of Courts",
        //   href: "https://www.polkcountyclerk.net/",
        // },
        {
          title: "Property Appraiser ",
          href: "https://www.polkpa.org/",
        },
        {
          title: "Tax Collector",
          href: "https://www.polktaxes.com/",
        },
      ],
    },
    {
      heading: "Sumter County:",
      link: [
        {
          title: "Clerk of Courts",
          href: "https://www.sumterclerk.com/",
        },
        {
          title: "Property Appraiser ",
          href: "https://www.sumterpa.com/",
        },
        {
          title: "Tax Collector",
          href: "https://www.sumtertaxcollector.com/",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#EDF0F8] text-[28px] my-8">
      <link
        rel="canonical"
        href="https://www.e-estatesandtrusts.com/resources"
      ></link>
      <MarginWrapper>
        <div className="py-8">
          <div className="flex justify-center">
            <h1 className=" text-[#085FA0] border-b-4 border-[#B5F66A] py-2 font-Saira">
              Client Resouces
            </h1>
          </div>
          <div className="grid md:grid-cols-2 lg:flex flex-wrap justify-center gap-10 my-8 ">
            {ClientResoucesData.map((item, index) => (
              <div
                key={index}
                style={{ boxShadow: "2px 2px 1px #085FA0" }}
                className="bg-[#FFFF] p-4 w-80  rounded-lg"
              >
                {item.heading === "Executor Exchange:" ? (
                  <Link
                    href="https://executorexchange.com/"
                    target="_blank"
                    className="text-[#1F2E4D] font-Saira"
                  >
                    {item.heading}
                  </Link>
                ) : (
                  <h2 className="text-[#1F2E4D] font-Saira">{item.heading}</h2>
                )}
                {item?.link?.map((data, idx) => (
                  <div key={idx} className="grid">
                    <Link
                      href={data.href}
                      className="text-[18px] font-Nunito font-semibold text-[#085FA0] hover:text-[#1F2E4D] "
                    >
                      <div
                        className={`flex gap-2 ${
                          idx === 0 &&
                          data.title === "Referral Resources for Fiduciaries :-"
                            ? "items-start"
                            : "items-center"
                        } `}
                      >
                        {idx === 0 &&
                        data.title ===
                          "Referral Resources for Fiduciaries :-" ? (""
                        ) : (
                          <FaLongArrowAltRight />
                        )}
                        {data.title}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </MarginWrapper>
    </div>
  );
};

export default page;
