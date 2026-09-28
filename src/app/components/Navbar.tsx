"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ListIcon, XIcon } from "@phosphor-icons/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 bg-black/30 transition-all ${
        scrolled ? "backdrop-blur-lg shadow-xl" : "backdrop-blur-md"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-orange-500 to-amber-500">
            <Link href="/">JapanWorld</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-white font-medium">
            {["History", "Geography", "Culture", "Language"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative group px-1 py-2"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-red-700 via-orange-500 to-amber-500 transition-all group-hover:w-full rounded"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="rounded-md p-2 text-white transition hover:text-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
            >
              {isOpen ? (
                <XIcon weight="bold" className="cursor-pointer" size={32} />
              ) : (
                <ListIcon weight="bold" className="cursor-pointer" size={32} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        inert={!isOpen}
        className={`md:hidden overflow-hidden bg-gradient-to-b from-red-700/20 via-orange-500/70 to-amber-500/70 backdrop-blur-md transition-[max-height] duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 flex flex-col space-y-3">
          {["History", "Geography", "Culture", "Language"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="rounded px-2 py-2 text-lg font-medium text-white transition hover:translate-x-2 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-amber-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
