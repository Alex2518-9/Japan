"use client";

import Image from "next/image";
import { useState } from "react";

type HeroImageProps = {
  src: string;
};

const HeroImage = ({ src }: HeroImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 transition-opacity duration-700 motion-reduce:transition-none ${
          isLoaded ? "opacity-0" : "animate-pulse opacity-100 motion-reduce:animate-none"
        }`}
      />
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`object-cover transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
          isLoaded
            ? "scale-100 opacity-100"
            : "scale-105 opacity-0 motion-reduce:scale-100"
        }`}
      />
    </>
  );
};

export default HeroImage;
