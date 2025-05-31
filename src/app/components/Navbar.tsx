import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#2A2A60] px-8 h-16 flex items-center justify-between">
      <div className="text-[#FFD700] text-xl tracking-wide">
        StarrySkyAsthology
      </div>
      <div className="flex items-center gap-6">
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
          Our services
        </a>
        <a
          href="#book-a-reading"
          className="bg-[#FFD700] text-[#2A2A60] rounded-full py-2 px-5 no-underline text-base shadow-sm transition-colors duration-200 hover:bg-yellow-400"
        >
          Book a reading
        </a>
      </div>
    </nav>
  );
};

export default Navbar;