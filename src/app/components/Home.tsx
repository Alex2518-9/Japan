"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
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

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"
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
          日本の世界
        </h1>

        {/* Pages Section */}
        <section
          id="pages"
          className="relative z-10 py-20 px-6 md:px-12 lg:px-20"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pageLinks.map(({ description, href, title, icon }, i) => (
              <Link
                key={i}
                href={href}
                className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition transform duration-300 ease-in-out hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 justify-center mb-2">
                  {icon}
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p className="text-gray-600">{description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
