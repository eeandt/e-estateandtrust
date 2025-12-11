import Header from "@/components/Header";
import "./globals.css";
import { Inter, Saira_Condensed, Nunito_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import StructuredData from "../components/StructuredData";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const saira_condensed = Saira_Condensed({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
  variable: "--font-Saira",
});
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-Nunito",
});

export const metadata = {
  // metadataBase: new URL('https://www.e-estatesandtrusts.com/'),
  title: "e-EstatesandTrusts Probate Attorney Firm in Florida, Ocala",
  description:
    "Looking for a reliable probate attorney firm in Florida, Ocala? Discover the expertise of E-Estatesand Trusts, your trusted legal partner in matters of probate.",
  icons: {
    icon: "/icons/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": "dXxGvOnAQuEvKJ9Fmi5YGDFTjAoKGqMS2ja5wE4Qr4Y",
  },
};

export default function RootLayout({ children, params }) {
  const structuredData ={
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "e-Estates and Trusts, PLLC",
    "image": "https://www.e-estatesandtrusts.com/icons/headerLogo.svg",
    "@id": "https://www.e-estatesandtrusts.com/legal-team",
    "url": "https://www.e-estatesandtrusts.com/",
    "telephone": "+1 352 600 2987",
    "priceRange": "$300",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SE Maricamp Rd. , #104-411",
      "addressLocality": "Ocala",
      "addressRegion": "FL",
      "postalCode": "34471",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.1538325,
      "longitude": -82.080545
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/people/E-Estates-and-Trusts-PLLC/100084833900756/",
      "https://twitter.com/e_trusts",
      "https://www.instagram.com/e_estatesandtrusts/",
      "https://www.youtube.com/@e-EstatesandTrusts",
      "https://www.pinterest.com/eestatesandtrusts/",
      "https://www.e-estatesandtrusts.com/"
    ]
  }
  return (
    
    <html lang="en">
      <body
        className={`${inter.variable} ${nunito_sans.variable}  ${saira_condensed.variable} `}
      >
      <StructuredData data={structuredData} />
        <Header />
        {children}
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZYZGBZWFGN" />
        <Script id="google-analytics">
          {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-ZYZGBZWFGN');
        `}
        </Script>
      </body>

      <GoogleTagManager gtmId="GTM-TKKSHJ9" />
    </html>
  );
}
