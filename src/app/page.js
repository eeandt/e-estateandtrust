import React from "react";
import HomePage from "../components/HomePage";
import AboutUsSection from "../components/AboutUsSection";
import Testimonials from "../components/Testimonials";

export const metadata = {
  title: "Estates, Probate, and Trust Attorney Firm Ocala, Fl",
  description:
    "e-Estates and Trusts offers virtual and concierge legal services. Best Estate Planning, Probate, and Trust Administration Attorney firm in Florida Ocala.",
  alternates: {
    canonical: "https://www.e-estatesandtrusts.com",
  },
  openGraph: {
    title: "Estates, Probate, and Trust Attorney Firm Ocala, Fl",
    description:
      "e-Estates and Trusts offers virtual and concierge legal services. Best Estate Planning, Probate, and Trust Administration Attorney firm in Florida Ocala.",
    url: "https://www.e-estatesandtrusts.com",
    siteName: "e-Estates and Trusts, PLLC ",
    images: [
      {
        url: "https://www.youtube.com/embed/CO9PigMarkY",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutUsSection />
      <Testimonials />
    </>
  );
}
