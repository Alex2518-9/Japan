"use client";
import Image from "next/image";
import React from "react";
import HistoryTimeline from "./HistoryTimeline";

const History = () => {
  return (
    <main className="relative min-h-screen">
      <section
        id="hero"
        className="relative flex items-center justify-center h-screen b"
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

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 animate-fadeIn delay-200">
            Learn about some of the most important turning point in Japan
            history
          </p>

          <a
            href="#timeline"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Timeline Section */}
      <HistoryTimeline />
    </main>
  );
};

export default History;
