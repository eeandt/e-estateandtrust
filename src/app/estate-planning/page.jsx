import React from "react";
import MarginWrapper from "../../components/marginWrapper";
import Image from "next/image";
import Acordian from "../../components/Acordian";
import Link from "next/link";

export const metadata = {
  
  title: "Estate Planning Services in Florida | e-EstatesAndTrusts",
  description:
    "Ensure proper transfer of assets & safeguard your family's future with estate planning services in Florida. We offer wills & trusts to meet your needs.",
  alternates: {
    canonical: "https://www.e-estatesandtrusts.com/estate-planning",
  },
  openGraph: {
    title: "Estate Planning Services in Florida | e-EstatesAndTrusts",
    description:
    "Ensure proper transfer of assets & safeguard your family's future with estate planning services in Florida. We offer wills & trusts to meet your needs.",
    url: "https://www.e-estatesandtrusts.com/estate-planning",
    siteName: "e-Estates and Trusts, PLLC ",
    images: [{ url: "https://www.e-estatesandtrusts.com/icons/estatePlanning.jpeg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary",
    site: "@e-Estates and Trusts, PLLC",
    creator: "@e_trusts",
    title: "Estate Planning Services in Florida | e-EstatesAndTrusts",
  description:
    "Ensure proper transfer of assets & safeguard your family's future with estate planning services in Florida. We offer wills & trusts to meet your needs.",
   image: [
      {
        url: "https://www.e-estatesandtrusts.com/icons/estatePlanning.jpeg", 
        width: 640,
        height: 75,
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <link
        rel="canonical"
        href="https://www.e-estatesandtrusts.com/estate-planning"
      ></link>
      <MarginWrapper>
        <div className="my-6">
          <div className="bg-[#EDF0F8] p-6 bg-[#EDF0F8] rounded-md">
            <h1 className="text-[#085FA0]  font-Saira text-center text-[45px] lg:text-[65px] leading-none">
              Estate Planning
            </h1>
            <blockquote className="lg:text-center font-bold my-4 text-[#888] lg:px-10 font-style: italic">
              <p>
                In Florida, the{" "}
                <Link target="blank" href="/estate-planning">
                  {" "}
                  estate planning process{" "}
                </Link>
                consists of the creation of legal documents that direct what
                happens to your assets and property after your death, as well as
                who cares for you in the event of your disability or incapacity.
                Proper estate planning also allows for minimizing the tax
                consequences of transferring asset under state and federal gift
                and estate tax laws, as well as caring for loved ones in the
                event of your untimely passing. Moreover, a comprehensive estate
                plan can help your loved ones avoid the burden of probate and
                further avoid costly and lengthy disputes over your estate.
                Don’t leave important decisions regarding who receives your
                assets, who will be guardian of your children or who will manage
                your medical or financial affairs up to the State of Florida.
                Take control of your family’s future with a comprehensive estate
                plan today.
              </p>
            </blockquote>
          </div>
          <hr className="mx-8" />
          <Image
            className=" mx-auto w-full object-cover rounded-md shadow-2xl h-96 my-12     "
            src="/icons/estatePlanning.jpeg"
            width={500}
            height={400}
            alt="estate Plannig"
          />
          <div className="bg-[#EDF0F8] my-8 p-4">
            <h2 className="text-[#085FA0] font-Saira font-bold text-[28px]">
              What is your “Estate”?
            </h2>
            <p className="leading-6 font-Nunito ">
              Your estate consists of everything you own, and more. Your estate
              generally consists of, but is not limited to, the following:
              liquid assets like cash, money in bank accounts, life insurance
              policies, annuities, individual retirement accounts, 401(k)s,
              tangible personal property, vehicles, jewelry, heirlooms, your
              family, your values and even your legacy.
            </p>
            <h2 className="text-[#085FA0] font-Saira font-bold text-[20px] mt-2 ">
              What are Some Goals of Estate Planning?
            </h2>
            <div className="mt-2 mb-4">
              <Acordian
                title={
                  "Some important goals to consider in preparing a comprehensive estate plan are:"
                }
                content={
                  <ul>
                    <li>– Providing care for yourself </li>
                    <li>
                      – Providing care for your surviving spouse, significant
                      other, companion or partner
                    </li>
                    <li>– Providing care for your minor children</li>
                    <li>– Providing care for your minor children</li>
                    <li>– Providing care for your adult children</li>
                    <li>– Passing on your legacy</li>
                    <li></li>– Saving money in the long run
                    <li></li>– Maintaining power and control over assets you
                    have worked hard for
                  </ul>
                }
              />
            </div>
            <h2 className="text-[#085FA0] font-Saira font-bold text-[28px]">
              What are the Different Kinds of Estate Planning Documents?
            </h2>
            <p className="leading-6 font-Nunito">
              There are several different types of estate planning documents in
              Florida. Deciding which documents are an appropriate part of your{" "}
              <Link
                className="text-[#085FA0] font-bold "
                href="/blogs/comprehensive-estate-planning-checklist-2024"
                target="blank"
              >
                comprehensive estate plan{" "}
              </Link>
              is a complex legal determination made based upon several variables
              including your family dynamics, the extent and nature of your
              assets, who you would like to leave the assets to, and so on.
              Below is a list of common estate planning documents:
            </p>
            <div
              id="last-will-and-testament"
              className=" lg:flex my-4 justify-between items-center  "
            >
              <p className="leading-6 font-Nunito my-4 lg:w-1/2">
                <Link
                  target="blank"
                  href="/blogs/when-to-deposit-last-will"
                  className="text-[#085FA0] hover:opacity-80 font-Saira text-[18px]"
                >
                  Last Will and Testament:{" "}
                </Link>{" "}
                A Will directs who is to receive your assets upon your passing
                and generally disposes of assets through the probate process.
                Your Will is “proven up” in probate Court and a personal
                representative is charged with carrying out your wishes in the
                court-supervised probate process. You may change your Will at
                any time by executing a codicil to the Will or revoking your
                prior Will by executing a new Will. Your Will may not be changed
                by marking through words or sentences, or making handwritten
                changes on the original document. Changes to your Will must be
                made with the same formalities that were required when you
                initially made your Will in order to be effective under Florida
                law.
              </p>

              <Image
                className=" h-72 lg:mx-4 mx-auto shadow-xl rounded-md"
                src="/icons/livingTrust.jpeg"
                width={600}
                height={300}
                alt="Living Trust"
              />
            </div>
            <Link
              href="/blogs/personal-representative-eligibility-and-duties-in-florida"
              className="leading-6 hover:text-[#2D89EF] text-[#085FA0] font-Nunito font-bold lg:w-1/2"
            >
              Feeling Lost as a Personal Representative? Explore Your Duties &
              Responsibilities as a Personal Representative!
            </Link>
            <p className="leading-6 py-4 font-Nunito">
              If you would like to discuss having a Will prepared or make
              changes to an existing Will,{" "}
              <Link
                href="/contact-us"
                className="bg-[#2D89EF] rounded-md font-bold px-2 text-white"
              >
                Contact Us
              </Link>{" "}
              to schedule a consultation with one of our experienced estate
              planning attorneys.
            </p>
            <div className="lg:flex justify-between my-8">
              <Image
                className="lg:mx-4 mx-auto  h-72 shadow-xl my-4 rounded-md bg-[#085FA0] "
                src="/icons/revocableTrust.jpeg"
                width={600}
                height={300}
                alt="Living Trust"
              />
              <p
                id="Revocable-Living-Trust"
                className="leading-6 font-Nunito lg:w-1/2 my-auto"
              >
                <strong className="text-[#085FA0] font-Saira text-[18px]">
                  Revocable Living Trust :{" "}
                </strong>
                A trust is a document that allows you to transfer ownership of
                most of your assets from yourself to the trust, and name you (or
                someone you choose) as the trustee to be in control of the
                assets. This is an agreement you make during your lifetime for
                the benefit of yourself, and for the benefit of your spouse or
                other intended beneficiaries after your death. If the creator
                (the Grantor/Settlor) of this agreement sets the trust up during
                his or her lifetime, it is called a “Living Trust.” If the
                creator retains the right to change, amend or dissolve the trust
                during his or her lifetime, it is a “Revocable Living Trust.”
              </p>
            </div>
            <p className="leading-6 font-Nunito">
              A Revocable Living Trust, if properly funded, will help your
              family and loved ones avoid probate upon your death. A revocable
              living trust allows for a seamless transition during your
              lifetime, through incapacity, and after death. You can select who
              you would like to be in charge of your trust estate at incapacity,
              and who you would like to be in charge of your trust estate at
              death. You are able to control how your beneficiaries inherit
              their interests and, if properly drafted, you can prevent
              creditors of your beneficiaries from laying claim to your family
              legacy during your lifetime. Under most circumstances, your
              Revocable Living Trust can be modified, revoked or amended,
              provided you have the requisite capacity.
            </p>
            <div className="my-4">
              <Acordian
                title={"What are the Advantages of a Revocable Living Trust?"}
                content={
                  <div>
                    1. AVOIDS PROBATE – A properly funded trust avoids probate,
                    which could represent substantial savings in both time and
                    money for your beneficiaries . <br />
                    2. AVOIDS COSTLY DELAY – A properly funded trust can be
                    administered in a much more efficient and timely manner than
                    the court-supervised probate process.
                    <br />
                    3. PROVIDES PRIVACY – Florida law requires that your Will be
                    deposited with the Clerk of Courts at the time of an
                    individual’s death. When your Will is deposited, it becomes
                    part of public records. Anyone can see a list of your
                    assets, liabilities, and who will receive your property.
                    Revocable Living Trusts are not required to be deposited
                    with the Clerk of Courts, so individuals cannot determine
                    the extent of your assets, liabilities or intended
                    beneficiaries. Therefore, property held by a revocable
                    living trust is private and the identities of trust
                    beneficiaries are also kept private.
                    <br />
                    4. AVOIDS THE NEED FOR GUARDIANSHIP – Another major
                    advantage of a revocable living trust is that if the
                    Grantor/Settlor becomes incapacitated or disabled and can no
                    longer handle his or her own affairs, a “Successor” Trustee
                    is already named in the trust agreement to manage the trust
                    assets for the benefit of the Grantor/Settlor. A
                    Guardianship or Conservatorship is not necessary for assets
                    that are held in the trust.
                  </div>
                }
              />
            </div>
            <p className="leading-6 font-Nunito">
              If you would like to discuss having a Revocable Living Trust
              prepared or make changes to an existing trust,{" "}
              <Link
                href="/contact-us"
                className="bg-[#2D89EF] rounded-md font-bold px-2 text-white"
              >
                Contact Us
              </Link>{" "}
              to schedule a consultation with one of our experienced estate
              planning attorneys
            </p>
          </div>
          <h2 className="text-[#085FA0] font-Saira font-bold text-[28px]">
            Advanced Directives:
          </h2>
          <p className="leading-6 font-Nunito py-2">
            The term Advanced Directive generally refers to your health care
            documents, such as the Designation of Health Care Surrogate and
            Living Will Declaration.
          </p>
          <p id="Living-Will" className="leading-6 font-Nunito">
            <strong className="text-[#085FA0] font-Saira text-[18px]">
              {" "}
              Living Will Declaration:
            </strong>{" "}
            A Living Will Declaration is an advanced directive in which you make
            your wishes known with respect to the withholding or withdrawal of
            certain life-prolonging procedures under very limited, specific
            circumstances. Your Living Will Declaration will not be given effect
            as long as you can communicate your wishes to your physician and
            other health care providers at the time of your treatment. If you
            lose the ability to communicate your wishes, your Living Will
            Declaration still will not be given effect unless your attending
            physician and a second consulting physician both agree that your
            condition is such that it would be appropriate to invoke your Living
            Will as the final expression of your wishes. Your Living Will
            Declaration may be modified or revoked at any time, as long as you
            have capacity.
          </p>
          <p className="leading-6 font-Nunito my-4">
            <strong>NOTE: </strong> We recommend providing copies of your
            Designation of Heath Care Surrogate and Living Will Declaration to
            the agent under your health care surrogate, your general physician,
            any specialists you see, and to the hospital or hospitals where you
            are likely to go for treatment. We also recommend discussing these
            documents with your physician at your next scheduled appointment to
            confirm that he or she is willing to honor your wishes regarding the
            cessation or withholding of life prolonging procedures in
            appropriate circumstances. We further recommend that you ask your
            physician to make an entry in your medical records confirming the
            discussion of your wishes as expressed in your Living Will
            Declaration and confirming that your physician has copies of both
            documents in your file.
          </p>
          <p className="leading-6 font-Nunito">
            If you would like to discuss having a Living Will Declaration
            prepared or make changes to an existing Living Will,{" "}
            <Link
              href="/contact-us"
              className="bg-[#2D89EF] rounded-md font-bold px-2 text-white"
            >
              Contact Us
            </Link>{" "}
            to schedule a consultation with one of our experienced estate
            planning attorneys.
          </p>

          <p id="Power-of-Attorney" className=" leading-6 font-Nunito my-4">
            <Link
              target="blank"
              href="/blogs/5-reasons-for-a-need-of-durable-power-of-attorney"
              className="text-[#085FA0] hover:opacity-80 font-Saira text-[18px]"
            >
              Durable Power of Attorney:{" "}
            </Link>{" "}
            A Durable Power of Attorney is an important legal document by which
            you authorize another individual to step into your shoes and
            transact your personal and business financial affairs during your
            lifetime, without court supervision or approval. The person you
            appoint as your attorney-in-fact or agent should be someone you
            trust completely. Although your attorney-in-fact will have a
            fiduciary obligation to act in your best interest while serving as
            your power of attorney, that doesn’t always happen. Your
            attorney-in-fact will have the power to withdraw money from your
            bank accounts and brokerage accounts, mortgage and transfer your
            real and personal property, and take other actions which could be
            devastating financially. We call this to your attention because it
            is imperative that you take whatever precautions necessary under the
            circumstances to protect your interests.
          </p>
          <Image
            className="mx-auto w-full h-80 my-8  rounded-md shadow-xl "
            src="/icons/estateBlog.jpeg"
            width={400}
            height={400}
            alt="estate planning"
          />
          <p className="leading-6 font-Nunito my-4">
            The powers granted to your attorney-in-fact will be effective the
            moment you sign your durable power of attorney and will continue to
            exist for your entire lifetime, even if you become incapacitated,
            unless you revoke or terminate the durable power of attorney in a
            written instrument executed with the same formalities as the
            original instrument. You will have the right to modify, revoke or
            terminate your durable power of attorney at any time, provided you
            have the requisite legal capacity. The power granted by your durable
            power of attorney terminates automatically upon your death.
          </p>

          <p className="leading-6 font-Nunito my-4">
            In late 2011, the Florida Legislature enacted a new power of
            attorney statute which effectuated many substantial changes in the
            law. These changes severely impact existing documents that were
            executed prior to such time. Even if your document itself is valid,
            there may be some provisions in the document that are not, or that
            need to be added to assist your estate planning goals.
          </p>
          <p>
            If you would like to discuss having a Durable Power of Attorney
            prepared or make changes or update an existing Durable Power of
            Attorney,{" "}
            <Link
              href="/contact-us"
              className="bg-[#2D89EF] rounded-md font-bold px-2 text-white"
            >
              Contact Us
            </Link>{" "}
            to schedule a consultation with one of our experienced estate
            planning attorneys.
          </p>
          <p
            id="Designation-of-Pre-Need-Guardian"
            className="leading-6 font-Nunito my-4"
          >
            <strong className="text-[#085FA0] font-Saira text-[18px]">
              Designation of Pre-Need Guardian:{" "}
            </strong>{" "}
            Designation of Pre-Need Guardian is prepared and signed while you
            have capacity to provide evidence to the Court of who you want to be
            your guardian of your property and person, should you ever need one.
            Although this document is not legally binding on the Court, it is
            used as an evidentiary tool for the Court in appointing an
            appropriate Guardian. Your Designation of Pre-Need Guardian may be
            modified or revoked at any time, provided you have the requisite
            capacity.
          </p>
          <p className="leading-6 font-Nunito">
            If you would like to discuss having a Designation of Pre-Need
            Guardian prepared or make changes to an existing Designation of
            Pre-Need Guardian,{" "}
            <Link
              href="/contact-us"
              className="bg-[#2D89EF] rounded-md font-bold px-2 text-white"
            >
              Contact Us
            </Link>{" "}
            to schedule a consultation with one of our experienced{" "}
            <Link target="blank" href="/author/rebecca-nichols">
              estate planning attorneys.
            </Link>
          </p>
          <p
            id="Designation-of-Health-Care-Surrogate"
            className="leading-6 font-Nunito my-4"
          >
            <strong className="text-[#085FA0] font-Saira text-[18px]">
              Designation of Health Care Surrogate:
            </strong>{" "}
            A Designation of Health Care Surrogate is a document in which you
            select an individual to make health care decisions for you in the
            event you become unable to make those decisions for yourself (or
            under the new statute discussed below, if you choose for the
            document to become effective immediately), and authorizes your
            physician and other health care providers to disclose sufficient
            information about your condition and treatment to your surrogate in
            order for them to make a meaningful and informed decision on your
            behalf. Your Designation of Health Care Surrogate may be modified or
            revoked at any time, provided you have the requisite capacity.
          </p>
          <p className="leading-6 font-Nunito my-4">
            Chapter 765 of the Florida Statutes was amended, on October 1, 2015.
            One of the most radical changes, indeed perhaps the only one, under
            the 2015 amendment to Chapter 765 is the ability to make a
            Designation of Health Care Surrogate effective immediately upon
            signing, rather than empowering the surrogate only when the
            patient’s physician(s) have determined that he or she is no longer
            capable of making those decisions.
          </p>
          <p className="leading-6 font-Nunito">
            If you would like to discuss having a Designation of Health Care
            Surrogate prepared or make changes to an existing Designation of
            Health Care Surrogate,{" "}
            <Link
              href="/contact-us"
              className="bg-[#2D89EF] rounded-md font-bold px-2 text-white"
            >
              Contact Us
            </Link>{" "}
            to schedule a consultation with one of our experienced estate
            planning attorneys.
          </p>

          <div className="my-4">
            <Acordian
              title={"Can Estate Planning Protect Minor Children?"}
              content={
                "If you have minor children, you should not wait to establish a proper estate plan. It is everyone’s hope to be around long enough to raise your child or children into adulthood, but sometimes life has other plans. The only way to ensure the security of your family is with a comprehensive estate plan developed with the assistance of an experienced estate planning attorney."
              }
            />
            <Acordian
              title={"Who Will Care for My Child or Children?"}
              content={
                <div>
                  {" "}
                  <p className="leading-6 font-Nunito">
                    First, you should indicate who you would prefer to raise
                    your child or children in the event of your passing. In
                    Florida, you can nominate a guardian of minors in your Last
                    Will & Testament. If there are two parents, each parent
                    should have his or her own individual Will and name the
                    other parent as guardian. Each parent should also nominate a
                    back-up or successor guardian, in the event the other parent
                    is unable to serve.
                  </p>{" "}
                  <p className="leading-6 font-Nunito my-4">
                    In selecting a guardian, you should consider the
                    individual’s values and temperament, whether they have other
                    children and their location, just to name a few factors. If
                    your children are school-aged, you may wish for the guardian
                    to reside in your community so the children have some
                    feeling of continuity and stability upon your passing. We
                    often hear clients consider naming grandparents as guardians
                    of minors. However, if your children are younger, you should
                    consider whether grandparents will be able to properly care
                    for them given physical limitations or even mobility issues.
                    This is a major decision that should not be taken lightly.
                  </p>
                  <p className="leading-6 font-Nunito">
                    If you pass away, ultimately the Court will decide who is
                    best able to raise your child or children. The Court will
                    generally honor your wishes as indicated in a Last Will &
                    Testament, unless the individual you have selected is unfit
                    or there are other extenuating circumstances.
                  </p>{" "}
                </div>
              }
            />
            <Acordian
              title={"How Can I Protect Assets for My Minor Children?"}
              content={
                <div>
                  {" "}
                  <p className="leading-6 font-Nunito my-4">
                    If you have minor children, you should not wait to establish
                    a proper estate plan. It is everyone’s hope to be around
                    long enough to raise your child or children into adulthood,
                    but sometimes life has other plans. The only way to ensure
                    the security of your family is with a comprehensive estate
                    plan developed with the assistance of an experienced estate
                    planning attorney.
                  </p>
                  <p>
                    You can also dictate the terms of when your child or
                    children are to get distributions from the trust. For
                    instance, the trust can provide that funds may be used to
                    provide for the health, education, maintenance and support
                    of the minor child or children until they reach a certain
                    age. Upon reaching a certain age or other milestone, you can
                    instruct your trustee to distribute a fixed portion of the
                    assets in the trust to the child. For example, you can
                    instruct the trustee to distribute one-third (1/3) of the
                    trust assets to your child at the age of 21 or 25.
                  </p>{" "}
                </div>
              }
            />
            <Acordian
              title={"Can I Designate my Minor Child as Beneficiary on Assets?"}
              content={
                <div>
                  <p className="leading-6 font-Nunito my-4">
                    Here at e-Estates and Trusts, we do not recommend that you
                    name minor children as beneficiaries of your assets. If your
                    minor children are named beneficiaries on assets at the time
                    of your death, a guardian of property will become necessary
                    under certain circumstances. A Court will create a
                    guardianship for the minor and also select a guardian to
                    hold they funds or assets they have inherited. Those funds
                    may be released to your child when he or she reaches the age
                    of majority. It should be noted that many legal “adults”
                    lack the maturity to prudently manage a lump sum of money.
                    Thus, we recommend designating your trust as the beneficiary
                    on certain assets to ensure the assets are held in the same
                    trust, controlled by the provisions of your trust and
                    managed by the same trustee for the benefit of your child or
                    children.
                  </p>
                  <p className="leading-6 font-Nunito">
                    If you would like to discuss how to best protect your minor
                    child or children in the event of your incapacity or
                    untimely death,{" "}
                    <Link
                      href="/contact-us"
                      className="bg-[#2D89EF] rounded-md font-bold px-2 text-white"
                    >
                      Contact Us
                    </Link>{" "}
                    to schedule a consultation with one of our experienced
                    estate planning attorneys. We understand how busy life is
                    with young children, and we are thrilled to offer convenient
                    telephone or video conferences with our experienced
                    attorneys to get you started on your path to a secure
                    future.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </MarginWrapper>
    </div>
  );
};

export default page;
