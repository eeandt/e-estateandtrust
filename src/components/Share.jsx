"use client";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Share = () => {
  const pathname = usePathname();
  const url = `${
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.e-estatesandtrusts.com"
  }${pathname}`;

  return (
    <div className="flex flex-row md:flex-col gap-4 md:mt-14 md:sticky top-10  ">
      <FacebookShareButton url={url}>
        <FacebookIcon
          size={48}
          className="rounded-full opacity-50 hover:opacity-100 "
        />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <FaXTwitter
          size={48}
          className="rounded-full border-2 border-black p-2 opacity-50 hover:opacity-100"
        />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon
          size={48}
          className="rounded-full opacity-50 hover:opacity-100"
        />
      </LinkedinShareButton>
      <EmailShareButton url={url}>
        <EmailIcon
          size={48}
          className="rounded-full opacity-50 hover:opacity-100"
        />
      </EmailShareButton>
    </div>
  );
};

export default Share;
