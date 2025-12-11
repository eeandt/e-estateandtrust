'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";

const CallButton = () => (<div >
    <Link
        className="flex items-center hover:text-[#085FA0]"
        onClick={() => {
            gtag("event", "call.placed", {
                "url": window.location.href
            })
        }}
        href="tel:352-600-2987"
    >
        <Image
            className=" w-4 h-4"
            src="/icons/headerContact.svg"
            width={30}
            height={30}
            alt="Contact icon"
        />

        <p className="text-xs mx-2 font-Nunito lg:text-[16px]">
            352-600-2987
        </p>
    </Link>
</div>)


export default CallButton;