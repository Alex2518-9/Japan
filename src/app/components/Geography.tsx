"use client";
import React from "react";
import HeroImage from "./HeroImage";
import JapanMap from "./JapanMap";
import GeographyInfo from "./GeographyInfo";

const Geography = () => {
  return (
    <main className="relative min-h-screen">
      <section
        id="hero"
        className="relative flex min-h-[100svh] items-center justify-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <HeroImage src="/map_medium.jpg" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 text-center sm:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            日本の地理
          </h1>
        </div>
      </section>
      {/* Blank map Section */}
      <section
        id="map"
        className="relative z-10 min-h-screen bg-gradient-to-b from-gray-800 to-slate-800 px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
          <GeographyInfo />
          <JapanMap />
        </div>
      </section>
    </main>
  );
};

export default Geography;
