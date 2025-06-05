import TarotCard from "./TarotCard";
import Image from "next/image";

export default function ServicesBanner() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-[url('/servicebg.png')] bg-cover bg-center text-white text-center p-8">
        <h1 className="transition-all duration-300 text-[#ffd700] font-bold text-4xl md:text-5xl mt-10 mb-1">
          Our Services
        </h1>
        <h2 className="transition-all duration-300 text-[#ffd700] font-normal text-1xl md:text-2xl mb-5 ">
          Explore Our Personalized Astrology Offerings
        </h2>
        <div className="flex items-center justify-center">
          <div className="z-0 transition-all duration-300
            md:mt-20 md:rotate-[-20deg]
            lg:mt-30 lg:rotate-[-30deg]
            xl:mt-40 xl:rotate-[-40deg]">
            <TarotCard
              imageSrc="/servicetarotmark1.png"
              nameCard="Daily Horoscope Readings"
              describeCard="Short, engaging predictions for love, career, health, and personal growth Users can select their zodiac sign to view personalized readings."
            />
          </div>
          <div className="z-1 -ml-[370px] transition-all duration-300
            md:-ml-[300px]
            lg:-ml-[170px]
            xl:-ml-[80px]">
            <TarotCard
              imageSrc="/servicetarotmark2.png"
              nameCard="Natal Birth Chart Analysis"
              describeCard="Explain the significance of the Sun, Moon, and Rising signs, along with planetary placements Interactive birth chart generator where users input their details."
            />
          </div>
          <div
            className="z-2 -ml-[370px] transition-all duration-300
            md:-ml-[300px] md:mt-20 md:rotate-[20deg]
            lg:-ml-[170px] lg:mt-30 lg:rotate-[30deg]
            xl:-ml-[80px] xl:mt-40 xl:rotate-[40deg]"
          >
            <TarotCard
              imageSrc="/servicetarotmark3.png"
              nameCard="Couples Compatibility Report"
              describeCard="Insights into emotional, intellectual, and physical compatibility. Users enter their birth details to receive a compatibility score and analysis."
            />
          </div>
        </div>
      </div>
      <div className="bg-[E6E6FA]">
        <p>“ Over 10 years of experience in astrology ”</p>
        <Image
          src="/hand.png"
          alt="Hand with stars"
          width={1440}
          height={0}
          className="mx-auto mt-4"
        />
      </div>
    </div>
  );
}
// This code defines a ServicesBanner component that displays a banner for astrology services.
