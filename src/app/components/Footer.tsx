export default function Footer() {
  return (
    <div className="snap-start snap-always">
      <div className="bg-[#2A2A60] text-[#E6E6FA] p-10 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:gap-20">
            <div className="flex flex-col">
              <p className="text-[#FFD700] font-bold">StarrySkyAstrology</p>
              <a href="book a reading">Readings</a>
              <a href="Chart Analysis">Chart Analysis</a>
            </div>
            <div className="flex flex-col">
              <p className="text-[#FFD700] font-bold">Services</p>
              <a href="book a reading">Daily Horoscope Readings</a>
              <a href="Chart Analysis">Natal Birth Chart Analysis</a>
              <a href="Couples Compatibility Report">
                Couple’s Compatibility Report
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[#FFD700] font-bold">Help&Contact</p>
            <p >Astrology@sa.com</p>
            <p>+66-240X-XXXX</p>
          </div>
        </div>
      </div>
      <div className="bg-[#1A1A40]">
        <p className="text-[#E6E6FA] text-center text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl p-4">
          © 2025 StarrySkyAstrology. All rights reserved.
        </p>
      </div>
    </div>
  );
}
