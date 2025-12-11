import Image from "next/image";
import React from "react";
import { MdStarRate } from "react-icons/md";
function ReviewsCard({ paragraph, name, index, url, starRating }) {
  const handleLinkOpen = () => {
    if (name == "David Glazer") {
      window.open(url, "_blank");
    }
  };

  return (
    <div
      className={`${index % 2 === 0 ? "mt-8" : "mt-0"} ${
        name == "David Glazer" && "cursor-pointer"
      }`}
      onClick={handleLinkOpen}
    >
      <div className="shadow-lg  p-8 w-96 h-[520px] rounded-md bg-white border-t-4  border-b-4 border-b-[#496DB6] border-t-[#496DB6]">
        <Image
          src="/icons/google.png"
          alt="google icon"
          height={40}
          width={40}
        />
        <p className="py-4 break-words font-Nunito">{paragraph}</p>
        <p className="text-[#085FA0] font-Nunito font-semibold">{name}</p>

        <div className="rating-container flex ">
          {Array(starRating)
            .fill(starRating)
            .map((_, index) => (
              <div key={index}>
                <MdStarRate className="text-[#E4A11B] " size={20} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsCard;
