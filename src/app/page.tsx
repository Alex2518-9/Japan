import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

type PageLinks = {
  title: string;
  description: string;
  href: string;
};

export const metadata: Metadata = {
  title: "日本の世界",
};

const pageLinks: PageLinks[] = [
  {
    title: "⚡ History",
    description: "Learn about Japan's history",
    href: "/history",
  },
  {
    title: "📱 Geography",
    description: "Works on all devices.",
    href: "geography",
  },
  {
    title: "🎨 Culture and traditions",
    description: "Styled with TailwindCSS.",
    href: "culture",
  },
  {
    title: "🎨 Language",
    description: "Styled with TailwindCSS.",
    href: "language",
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

        {/* Features Section */}
        <section
          id="features"
          className="relative z-10 py-20 px-6 md:px-12 lg:px-20"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pageLinks.map(({ description, href, title }, i) => (
              <Link
                key={i}
                href={href}
                className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition transform duration-300 ease-in-out hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
