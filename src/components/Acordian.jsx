"use client";
import React, { useState } from "react";

const Acordian = ({ title,content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="border-2  rounded p-2 mb-2">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="font-saria font-bold text-[#085FA0]">{title}</h2>
          <span className="text-gray-500">{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && <div className="font-Nunito m-2 leading-6 bg-[#ffff] p-2">{content}</div>}
      </div>
    </div>
  );
};

export default Acordian;
