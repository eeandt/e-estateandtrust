"use client";
import { useRouter } from "next/navigation";

export default function CategoryFilter() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center my-6 bg-white py-6">
      <h2 className="text-[#085FA0] text-center font-Saira">
        Browse by Category
      </h2>
      <p className="text-base text-center mt-2 px-2 text-[#085FA0]">
        Select a category to see more related content
      </p>
      <div className="lg:flex gap-8 space-y-4 lg:space-y-0 my-12">
        <div>
          <button
            className="rounded-md hover:bg-green-500 bg-[#2D89EF] flex items-center p-2"
            onClick={() =>
              router.push("/blogs", {
                scroll: false,
              })
            }
          >
            <h2 className="text-[#FFFF] text-lg px-2 font-semibold font-Nunito">
              All Blogs
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6  flex justify-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#B5F66A"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        <div>
          <button
            className="rounded-md hover:bg-green-500 bg-[#2D89EF] flex items-center p-2"
            onClick={() =>
              router.push("/blogs?category=estate-planning", {
                scroll: false,
              })
            }
          >
            <h2 className="text-[#FFFF] text-lg px-2 font-semibold font-Nunito">
              Estate Planning
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6  flex justify-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#B5F66A"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        <div className="">
          <button
            className="flex hover:bg-green-500 items-center rounded-md bg-[#2D89EF] p-2"
            onClick={() =>
              router.push("/blogs?category=probate", {
                scroll: false,
              })
            }
          >
            <h2 className="text-[#FFFF] px-2 f text-lg font-semibold font-Nunito">
              Probate
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 flex justify-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#B5F66A"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        <div className="">
          <button
            className="flex hover:bg-green-500 items-center rounded-md p-2 bg-[#2D89EF] "
            onClick={() =>
              router.push("/blogs?category=trust-administration", {
                scroll: false,
              })
            }
          >
            <h2 className="text-[#FFFF] text-lg font-semibold font-Nunito  px-2">
              Trust Administration
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 flex justify-center"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#B5F66A"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
