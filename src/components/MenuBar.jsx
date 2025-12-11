"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
const MenuBar = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const setMenubar = () => {
    setMenu(!menu);
  };

  return (
    <div className={`bg-[#085FA0] ease-in-out duration-500`}>
      <div className="lg:hidden px-4 py-2  flex justify-between">
        <div className="w-16">
          <p className="text-lg font-semibold text-white">Menu</p>
        </div>
        <div className="lg:hidden flex ">
          <button className="items-center" onClick={() => setMenubar()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
              aria-label="Button"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={` w-full  lg:flex lg:justify-center py-4 ${
          menu ? "block" : "hidden"
        }`}
      >
        <ul
          onClick={() => setMenubar()}
          className="lg:flex px-8 lg:space-x-10 lg:my-auto space-y-2 lg:space-y-0  text-white font-medium justify-center"
        >
          <li className={` ${pathname === "/" ? "text-[#86E21B]" : ""}  `}>
            <Link href="/" className="hover:text-[#86E21B]  ">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/estate-planning"
              className={`hover:text-[#86E21B]  ${
                pathname === "/estate-planning" ? "text-[#86E21B]" : ""
              }`}
            >
              Estate Planning
            </Link>
          </li>
          <li
            className={` ${
              pathname === "/trust-administration" ? "text-[#86E21B]" : ""
            } `}
          >
            <Link
              href="/trust-administration"
              className="hover:text-[#86E21B]  "
            >
              Trust Administration
            </Link>
          </li>
          <li
            className={` ${pathname === "/probate" ? "text-[#86E21B]" : ""} `}
          >
            <Link href="/probate" className="hover:text-[#86E21B] ">
              Probate
            </Link>
          </li>
          <li
            className={` ${
              pathname === "/legal-team" ? "text-[#86E21B]" : ""
            } `}
          >
            <Link href="/legal-team" className="hover:text-[#86E21B] ">
              Legal Team
            </Link>
          </li>
          {/* <li className="  ">
            <Link
              href="#"
              className="hover:text-[#86E21B] "
            >
              Resources
            </Link>
          </li> */}
          <li
            className={` ${pathname === "/resources" ? "text-[#86E21B]" : ""} `}
          >
            <Link href="/resources" className="hover:text-[#86E21B] ">
              Resources
            </Link>
          </li>
          <li className={` ${pathname === "/blogs" ? "text-[#86E21B]" : ""} `}>
            <Link href="/blogs" className="hover:text-[#86E21B] ">
              Blogs
            </Link>
          </li>
          <li
            className={` ${
              pathname === "/contact-us" ? "text-[#86E21B]" : ""
            } `}
          >
            <Link href="/contact-us" className="hover:text-[#86E21B] ">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBar;
