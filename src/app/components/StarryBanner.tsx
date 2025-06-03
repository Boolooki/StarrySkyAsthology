export default function StarryBanner() {
  return (
    <div
      className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[url('/starrysky.jpg')] bg-cover bg-center text-white text-center"
    >
      <h1 className="text-[#ffd700] text-4xl md:text-5xl mb-1">Starry Skies Astrology</h1>
      <h2 className="text-[#ffd700] font-normal text-1xl md:text-2xl mb-2.5">Discover Your Cosmic Destiny</h2>
      <p className="absolute mt-[80vh] font-[roboto] text-sm mb-5">
        Unlock the secrets of the stars with personalized astrology readings, birth charts, and compatibility reports.
      </p>
    </div>
  );
}