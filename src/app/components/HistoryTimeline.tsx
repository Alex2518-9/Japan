import React from "react";
import { timelineData } from "../data";

const HistoryTimeline = () => {
  return (
    <section
      id="timeline"
      title="timeline"
      className=" mx-auto px-4 min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white py-24"
    >
      <div className="relative w-full max-w-3xl">
        <ul className="space-y-6 md:space-y-0">
          {/* Timeline Item */}
          {timelineData.map(({ title, description, time }, index) => (
            <li
              key={index}
              className={`relative bg-gray-800 rounded-lg p-6 md:w-1/2 md:mb-12
          ${
            index % 2 === 0
              ? "md:mr-auto md:rounded-tr-none"
              : "md:ml-auto md:rounded-tl-none"
          }`}
            >
              <div>
                <h2 className="text-xs font-light mb-2 tracking-widest">
                  {time}
                </h2>
                <h1 className="text-xl font-medium mb-2">{title}</h1>
                <p className="text-sm font-light leading-relaxed">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-600 -translate-x-1/2"></div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
