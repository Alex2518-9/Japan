"use client";
import Image from "next/image";
import React from "react";
import JapanMap from "./JapanMap";
import GeographyInfo from "./GeographyInfo";

const Geography = () => {
  return (
    <main className="relative min-h-screen">
      <section
        id="hero"
        className="relative flex items-center justify-center h-screen"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/map_medium.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            日本の地理
          </h1>
        </div>
      </section>
      {/* Blank map Section */}
      <section
        id="map"
        className="relative z-10 py-20 px-6 bg-gradient-to-b from-gray-800 to-slate-800 md:px-12 lg:px-20 min-h-screen"
      >
        <div className="grid gap-8 sm:grid-cols-1 2xl:grid-cols-2">
          <GeographyInfo />
          <JapanMap />
        </div>
      </section>
    </main>
  );
};

export default Geography;
