import React from "react";
import MarginWrapper from "../../components/marginWrapper";
import Link from "next/link";
import Image from "next/image";


export const metadata = {

  metadataBase: new URL('https://www.e-estatesandtrusts.com'),

  title: "Florida Wills Trust & Probate Law Firm | e-Estates and Trusts",
  description:
    "Cloud-based virtual law offices, like e-Estates and Trusts, PLLC, a leading Florida will trusts and probate firm, offer tremendous flexibility and convenience.",
  alternates: {
    canonical: "https://www.e-estatesandtrusts.com/legal-team",
  },
  openGraph: {
    title: "Florida Wills Trust & Probate Law Firm | e-Estates and Trusts",
    description:
    "Cloud-based virtual law offices, like e-Estates and Trusts, PLLC, a leading Florida will trusts and probate firm, offer tremendous flexibility and convenience.",
    url: "https://www.e-estatesandtrusts.com/legal-team",
    siteName: "e-Estates and Trusts, PLLC ",
     images: [
        {
          url: "https://www.e-estatesandtrusts.com/icons/legalTeamHeroimg.jpeg", 
          width: 1200, height: 630
        },
      ],


    locale: "en_US",
    type: "website",
    
  },
  twitter: {
    card: "summary",
    site: "@e-Estates and Trusts, PLLC",
    creator: "@e_trusts",
    title: "Florida Wills Trust & Probate Law Firm | e-Estates and Trusts",
    description:
    "Cloud-based virtual law offices, like e-Estates and Trusts, PLLC, a leading Florida will trusts and probate firm, offer tremendous flexibility and convenience.",
    image: [
      {
        url: "https://www.e-estatesandtrusts.com/icons/legalTeamHeroimg.jpeg", 
        width: 640,
        height: 75,
      },
    ],
  },
};

const page = () => {
  return (
    <MarginWrapper>
      <div>
        <div className="my-6">
          <h1 className="text-[#085FA0] text-[32px] font-Saira lg:text-[45px] leading-tight">
            What Differentiates e-Estates and Trusts from Other Florida Will
            Trusts and Probate Firms?
          </h1>
          <p className="font-Nunito leading-normal py-2 ">
            “In 2020, the world was compelled to pivot from the status quo and
            reinvent ways of doing business. Cloud-based virtual law offices,
            like e-Estates and Trusts, PLLC, a leading{" "}
            <Link href="/">Florida will trusts and probate firm </Link> , offer
            tremendous flexibility and convenience. This approach enables you to
            collaborate with your attorney or check on your legal matter from
            wherever you are.
          </p>

          <p className="font-Nunito leading-normal">
            We firmly believe that, much like most aspects of your life, gaining
            access to legal services provided by licensed attorneys at a Florida
            wills trust and probate firm should be as straightforward as going
            online. Our goal is to simplify the legal process and provide you
            with the guidance you need for peace of mind.”
          </p>
          <h2 className="text-[#085FA0] my-2 text-center  font-Saira text-[28px]">
            What are the Benefits of Using a Virtual Law Firm?
          </h2>
          <Image
            className="mx-auto md:w-full md:h-96 h-64 shadow-2xl  rounded-md my-4"
            src="/icons/legalTeamHeroimg.jpeg"
            width={400}
            height={400}
            alt="law firm"
          />
          <p className="font-Nunito leading-normal py-2 mt-4">
            <strong className="text-[#085FA0] font-Saira text-[18px]">
              Value :
            </strong>{" "}
            {`Here at e-Estates and Trusts, we pride ourselves on using available
            technology, such as video conferences, cloud-based client portals,
            and e-signatures, to keep our overhead expenses low. Because we
            don’t carry the burden of expensive office space and support staff
            salaries, we can pass on the savings to you by providing
            high-quality and convenient legal services for an excellent value.`}
          </p>
          <p className="font-Nunito leading-normal py-2">
            <strong className="text-[#085FA0] font-Saira text-[18px]">
              Convenience :
            </strong>{" "}
            {`Because we work with our clients virtually, it is easier to schedule
            meetings at mutually convenient times. We can conference parties in
            different locations into the same consultation and there is no drive
            time or commute associated with coming to your appointment. We can
            discuss your needs from the comfort of your own home, office, or
            vehicle.`}
          </p>
          <p className="font-Nunito leading-normal py-2">
            <strong className="text-[#085FA0] font-Saira text-[18px]">
              Accessibility :
            </strong>{" "}
            {` Because we utilize cutting-edge technology, accessing your
            cloud-based client portal, client records, and case history is a
            breeze.`}
          </p>
          <p className="font-Nunito leading-normal py-2">
            <strong className="text-[#085FA0] font-Saira text-[18px]">
              Lifelong Relationships :
            </strong>{" "}
            {`The Estate Planning Will Trust Attorneys at e-Estates and Trusts are
            here for the long haul. Our goal in forming this firm was to deliver
            high-quality, meaningful virtual legal services to clients in a
            modern and convenient way. Offering remote services provides our
            clients with convenient access to legal services, and also allows us
            to spend more time with our small children before they grow up. We
            created this virtual law firm to ensure longevity and overall
            satisfaction for our clients and our legal team.`}
          </p>
          <h2 className="text-[#085FA0] text-center  font-Saira text-[28px] leading-normal  mt-8">
            Who are the Attorneys at e-Estates and Trusts?
          </h2>
          <div className="bg-[#EDF0F8] my-6 p-4 ">
            <div id="rebecca-profile" className="lg:flex">
              <div className="">
                <Link
                  href="/author/rebecca-nichols"
                  target="blank"
                  className="py-2 text-xl font-Saira hover:text-[#86E21B] font-bold text-[#085FA0]"
                >
                  Rebecca L. Nichols, Esq.
                </Link>
                <div className="px-2">
                  <p className="font-Nunito leading-normal text-black py-2">
                    Rebecca L. Nichols was raised in Sebring, Florida. She
                    attended Stetson University in DeLand, Florida, and
                    graduated with honors. Ms. Nichols went on to attend Stetson
                    University College of Law where she obtained her Juris
                    Doctorate, again graduating with honors. Further, Ms.
                    Nichols attended Stetson University School of Business where
                    she obtained her Master of Business Administration.
                  </p>
                  <p className="font-Nunito leading-normal text-black my-2">
                    {`Upon graduation, Ms. Nichols practiced as an associate
                    attorney for six (6) years before taking a year off to stay
                    home with her family following the birth of her son. During
                    her years as an associate, Ms. Nichols practiced primarily
                    in the areas of General Civil Litigation, Real Estate
                    Litigation, and Bankruptcy Law. Ms. Nichols began practicing
                    Elder Law in 2016.`}
                  </p>
                  <p className="font-Nunito leading-normal text-black my-2">
                    {`             Ms. Nichols has been a member of the Florida Bar since 2009.
                    She is admitted to practice law in the State of Florida and
                    holds an active license. Her commitment to the legal
                    profession extends beyond her practice. She has actively
                    participated in the Highlands County Bar Association and has
                    also dedicated her time as a member of the Board of
                    Directors within the same organization. Furthermore, her
                    leadership qualities shone through as she assumed the role
                    of Vice President for the Leadership Highlands Class of
                    2011.`}
                  </p>
                  <p className="font-Nunito text-black leading-normal my-2">
                    She has also been involved in United Way of Central Florida
                    as a Community Investment Team Volunteer for many years.
                    Moreover, she volunteered with Heartland Horses Equine
                    Activities & Learning, a non-profit organization providing
                    equine therapy to those with special needs, serving as a
                    member of the Board of Directors for several years. She was
                    also a member and Director of the Kiwanis Club of Sebring.
                  </p>
                  <p className="font-Nunito leading-normal text-black my-2">
                    Ms. Nichols spends her free time with her family, including
                    her rescue dog, Hunter. She enjoys traveling, reading,
                    boating, fishing, lobstering, painting, and photography.
                  </p>
                </div>
              </div>
              <Image
                style={{ objectFit: "contain" }}
                className="h-96 my-auto mx-auto"
                src="/icons/rebecca-crews-1.jpg"
                height={400}
                width={400}
                alt="team image"
              />
            </div>
          </div>
          <div className="bg-[#EDF0F8] my-6 p-4 lg:flex ">
            <div id="katina-profile">
              <Link
                target="blank"
                href="/author/katina-pantazis"
                className="py-2 text-xl hover:text-[#86E21B] font-Saira text-[#085FA0]"
              >
                Katina H. Pantazis, Esq.
              </Link>
              <div className="px-2">
                <p className="font-Nunito leading-normal text-black my-2">
                  Katina H. Pantazis, Esq. was born in Augusta, Georgia. She has
                  had the opportunity to live in multiple states: Georgia,
                  Kansas, Mississippi, and Florida. Katina earned a Business
                  degree from Stetson University in DeLand, Florida, in December
                  of 2004. She completed this degree early; knowing that law
                  school was in her future she chose to take a year between
                  college and law school working as a paralegal to gain some
                  hands-on experience. This skill set solidified her decision to
                  become an attorney.
                </p>
                <p className="font-Nunito leading-normal text-black my-2">
                  Katina earned her Juris Doctorate from Mississippi College
                  School of Law in May of 2009. Law school allowed for many
                  priceless experiences including a study abroad program in
                  Spetses, Greece, where she studied comparative international
                  law. As well as a third-year internship with the Middle
                  District of Florida Federal Public Defenders Office located in
                  Tampa.
                </p>
                <p className="font-Nunito leading-normal text-black my-2">
                  However, the catalyst that landed Katina in the field of law
                  she practices today was receiving the Elder Law Scholarship in
                  her second year of law school. This was the beginning of her
                  journey into estate planning. She immediately fell in love
                  with the work and most importantly the clientele.
                </p>
                <p className="font-Nunito leading-normal text-black my-2">
                  Katina focuses her practice on estate planning and wealth
                  preservation. She considers this her dream job — helping
                  people secure their future, both for themselves and their
                  loved ones.
                </p>
                <p className="font-Nunito leading-normal text-black py-2">
                  Katina is deeply involved in the community and a respected
                  member of the Florida Bar, Marion County Bar Association, Lake
                  County Bar Association, and Sumter County Bar Association. She
                  is also an active member of the Rotary Club of The Villages.
                  Her dedication to community service extends to her personal
                  life. In her free time, Katina actively participates in co-ed
                  intramurals such as flag football, basketball, soccer, and
                  volleyball. Additionally, she enjoys engaging in activities
                  like pickleball, running, kickboxing, yoga, and CrossFit.
                </p>
              </div>
            </div>
            <Image
              style={{ objectFit: "contain" }}
              className="h-96 my-auto mx-auto"
              src="/icons/katina-p-1.jpg"
              height={400}
              width={400}
              alt="team image"
            />
          </div>
          <div>
            <h2 className="py-2 text-xl font-Saira text-[#085FA0]">
              How Did E-Estates and Trusts Come About?
            </h2>
            <p className="font-Nunito leading-normal text-black py-2">
              <Link href="/estate-planning">
                {" "}
                Estate Planning Will Trust Attorneys{" "}
              </Link>{" "}
              Nichols and Pantazis have
              {`        known each other for more than twenty (20) years, meeting while in
              undergraduate school at Stetson University in DeLand, Florida. Not
              only were they friends, they were also sorority sisters in Pi Beta
              Phi. They have been practicing law in Florida since 2009 and both
              live in Central Florida with their families`}
            </p>
            <p className="font-Nunito leading-normal text-black py-2">
              {`            Attorneys Nichols and Pantazis both left the comfort of larger
              firms to create something different, something unique that would
              work for their young families and busy lifestyles, allowing them
              to live the lives they wanted while serving clients and performing
              legal work they are passionate about.`}
            </p>
            <p className="font-Nunito leading-normal text-black py-2">
              {`         They noted that many of their clients were from out of state and
              needed a Florida will trusts and probate law firm because their
              parents moved here for retirement. These clients had busy lives,
              jobs, children, extracurricular activities, and parents who’d
              passed away in an entirely different state they were suddenly
              solely responsible for handling. They appreciated our willingness
              to confer with them via telephone or video conference – they
              didn’t have to travel to Florida to meet with an attorney. They
              appreciated our ability to email pleadings to them for electronic
              signature – they didn’t have to find a printer, print every
              document, find an envelope and the appropriate number of stamps,
              and return the document via snail mail. The game was changing.`}
            </p>
            <p className="font-Nunito leading-normal text-black py-2">
              {`          They also noted that several of their friends, although they were
              professionals with families, careers, and assets, had not yet met
              with an attorney to discuss estate planning. They had issues
              synching up their schedules, requesting time off of work, and
              accommodating their kids’ school and extracurricular activities.
              Attorneys Nichols and Pantazis wanted to provide necessary legal
              services to these young families in a way that fit their busy
              lifestyles, so they established a virtual firm that allowed them
              to provide estate planning services to clients from the comfort of
              their own homes.`}
            </p>
            <p className="font-Nunito leading-normal text-black py-2">
              {`Here at e-Estates and Trusts, representing individuals or couples
              who want to plan for the protection of their children and their
              legacies is our passion. Guiding individuals through the
              emotional, challenging, and often overwhelming Comprehensive
              Estate Planning or Administration of Trusts in Florida process,
              while also remembering and honoring their loved ones, is another
              gift of ours. We are ready to assist you with your legal needs.`}
            </p>
          </div>
        </div>
      </div>
    </MarginWrapper>
  );
};
export default page;
