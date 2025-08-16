"use client";
import React from "react";
import { LanguageCardProps } from "../data";
import Image from "next/image";

const LanguageCard = ({ title, description, src }: LanguageCardProps) => {
  return (
    <div className="relative flex justify-center items-center flex-wrap w-full [transform-style:preserve-3d]">
      {/* Box */}
      <div className="relative w-[350px] h-[400px] m-10 bg-white rounded-2xl [transform-style:preserve-3d] block group">
        {/* Name */}
        <h1 className="absolute text-3xl top-0 left-0 w-full text-center text-black [transform-style:preserve-3d] translate-z-[75px] opacity-0 transition-all duration-500 z-10 group-hover:top-10 group-hover:opacity-100">
          {title}
        </h1>

        {/* Learn Button */}
        <a
          href="#"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 [transform-style:preserve-3d] translate-z-[75px] opacity-0 transition-all duration-500 z-10 px-6 py-2 rounded-full text-white bg-neutral-800 no-underline group-hover:bottom-8 group-hover:opacity-100"
        >
          Learn More
        </a>

        {/* Circle */}
        <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full bg-red-700 opacity-0 transition-all duration-500 [transform-style:preserve-3d] z-0 -translate-x-1/2 -translate-y-1/2 translate-z-[50px] group-hover:opacity-100"></div>

        {/* <Image src="images/kanji.png" class="write" /> */}
        {/* Write (content) */}
        <div className="absolute top-1/2 left-1/2 max-w-[300px] transition-all duration-500 z-[1000] [transform-style:preserve-3d] -translate-x-1/2 -translate-y-1/2 translate-z-[0px] -rotate-[15deg] group-hover:translate-z-[100px]">
          <Image
            width={200}
            height={200}
            src={src}
            alt={title}
            className="absolute top-1/2 left-1/2 max-w-[300px] transition-all duration-500 z-[1000] [transform-style:preserve-3d] -translate-x-1/2 -translate-y-1/2 translate-z-[0px] -rotate-[5deg] group-hover:translate-z-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
