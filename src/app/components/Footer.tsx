export default function Footer() {
  return (
    <div>
      <div className="flex bg-[#2A2A60] text-[#E6E6FA] p-10 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        <div className="">
          <p>StarrySkyAstrology</p>
          <a href="book a reading">Readings</a>
          <a href="Chart Analysis">Chart Analysis</a>
        </div>
        <div className="">
          <p>Services</p>
          <a href="book a reading">Daily Horoscope Readings</a>
          <a href="Chart Analysis">Natal Birth Chart Analysis</a>
          <a href="Couples Compatibility Report">
            Couple’s Compatibility Report
          </a>
        </div>
        <div className="">
          <p>Help&Contact</p>
          <p>StarrySkyAstrology@ssa.com</p>
          <p>+66-240X-XXXX</p>
        </div>
      </div>
      <div className="bg-[#1A1A40]">
        <p className="text-[#E6E6FA] text-center text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl p-4">
          © 2023 StarrySkyAstrology. All rights reserved.
        </p>
      </div>
    </div>
  );
}
