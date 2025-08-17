"use client";
import Image from "next/image";
import React from "react";
import HistoryTimeline from "./HistoryTimeline";

const History = () => {
  return (
    <main className="relative min-h-screen">
      <section
        id="hero"
        className="relative flex items-center justify-center h-screen"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/history_bg.jpg"
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
          <h1 className=" text-5xl md:text-7xl font-bold text-white mb-6">
            日本の歴史
          </h1>
        </div>
      </section>

      {/* Timeline Section */}
      <HistoryTimeline />
    </main>
  );
};

export default History;
