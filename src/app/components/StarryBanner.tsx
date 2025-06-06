export default function StarryBanner() {
  return (
    <div className="flex flex-col justify-between snap-start snap-always h-screen bg-[url('/starrysky.jpg')] bg-cover bg-center text-center text-[#ffd700] ">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1
          className="font-bold text-4xl mb-5
      md:text-5xl"
        >
          Starry Skies Astrology
        </h1>
        <h2
          className="text-1xl mb-5 
      md:text-2xl"
        >
          Discover Your Cosmic Destiny
        </h2>
      </div>
      <p className="font-[roboto] text-xs mb-20">
        Unlock the secrets of the stars with personalized astrology readings,
        birth charts, and compatibility reports.
      </p>
    </div>
  );
}
