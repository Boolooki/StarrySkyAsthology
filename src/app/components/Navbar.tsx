"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2A2A60] px-8 h-16 flex items-center justify-between sticky top-0 z-50">
      <div className="text-[#FFD700] text-xl flex items-center justify-between">
        <a
          href="#homepage"
          className="flex items-center space-x-2"
        >
        <Image
          src="/star.webp"
          alt=""
          width={24}
          height={24}
          className="object-contain"
        />
        <span>Skies Astrology</span>
        </a>
      </div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 w-6 bg-[#FFD700] rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-[#FFD700] rounded my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-1 w-6 bg-[#FFD700] rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-12">
        <a
          href="#why-choose-us"
          className="text-[#E6E6FA] no-underline text-base font-medium"
        >
          Why Choose Us?
        </a>
        <a
          href="#our-services"
          className="text-[#E6E6FA] no-underline text-base font-medium"
        >
          Our Services
        </a>
        <a
          href="#book-a-reading"
          className="bg-[#FFD700] text-[#2A2A60] rounded-full py-2 px-5 no-underline text-base shadow-sm transition-colors duration-200 hover:bg-yellow-400"
        >
          Book a Reading
        </a>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1a1a40] flex flex-col items-center gap-4 py-4 md:hidden z-50 shadow-lg">
          <a
            href="#why-choose-us"
            className="text-[#E6E6FA] no-underline text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Why Choose Us?
          </a>
          <a
            href="#our-services"
            className="text-[#E6E6FA] no-underline text-base font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Our services
          </a>
          <a
            href="#book-a-reading"
            className="bg-[#FFD700] text-[#2A2A60] rounded-full py-2 px-5 no-underline text-base shadow-sm transition-colors duration-200 hover:bg-yellow-400"
            onClick={() => setMenuOpen(false)}
          >
            Book a reading
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
