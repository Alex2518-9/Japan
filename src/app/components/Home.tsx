"use client";

import Link from "next/link";
import { ReactNode } from "react";
import HeroImage from "./HeroImage";
import {
  BookOpenTextIcon,
  GlobeHemisphereEastIcon,
  GrainsIcon,
  TranslateIcon,
} from "@phosphor-icons/react";

type PageLinks = {
  title: string;
  icon: ReactNode;
  description: string;
  href: string;
};

const pageLinks: PageLinks[] = [
  {
    title: "History",
    icon: <BookOpenTextIcon size={24} />,
    description: "Historical periods",
    href: "/history",
  },
  {
    title: "Geography",
    icon: <GlobeHemisphereEastIcon size={24} />,
    description: "Landscape and prefectures",
    href: "/geography",
  },
  {
    title: "Culture and traditions",
    icon: <GrainsIcon size={24} />,
    description: "Heritage, Beliefs, Lifestyle",
    href: "/culture",
  },
  {
    title: "Language",
    icon: <TranslateIcon size={24} />,
    description: "Hiragana, Katakana, Kanji",
    href: "/language",
  },
];

const Home = () => {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <HeroImage src="/bg.jpg" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
          日本の世界
        </h1>

        {/* Pages Section */}
        <section
          id="pages"
          className="relative z-10 w-full py-8 sm:px-6 sm:py-12 lg:px-12"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {pageLinks.map(({ description, href, title, icon }) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl bg-gray-50 p-5 text-gray-900 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl sm:p-6"
              >
                <div className="flex items-center gap-2 justify-center mb-2">
                  {icon}
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p className="text-gray-700">{description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
