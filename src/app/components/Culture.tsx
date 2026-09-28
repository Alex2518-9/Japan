"use client";
import React from "react";
import HeroImage from "./HeroImage";
import CultureAndTradition from "./CultureAndTradition";

const Culture = () => {
  return (
    <main className="relative min-h-screen">
      <section
        id="hero"
        className="relative flex min-h-[100svh] items-center justify-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <HeroImage src="/culture.jpg" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 text-center sm:px-6">
          <h1 className=" text-5xl md:text-7xl font-bold text-white mb-6">
            日本の文化
          </h1>
        </div>
      </section>

      {/* Timeline Section */}
      <CultureAndTradition />
    </main>
  );
};

export default Culture;
