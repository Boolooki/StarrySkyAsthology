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
          <div
            className="z-1 transition-all duration-300
            md:mt-20 md:rotate-[-20deg]
            lg:mt-30 lg:rotate-[-30deg]
            xl:mt-40 xl:rotate-[-40deg]
            "
          >
            <TarotCard
              imageSrc="/servicetarotmark1.png"
              nameCard="Daily Horoscope Readings"
              describeCard="Short, engaging predictions for love, career, health, and personal growth Users can select their zodiac sign to view personalized readings."
            />
          </div>
          <div
            className="z-2 -ml-[370px] transition-all duration-300
            md:-ml-[300px]
            lg:-ml-[170px]
            xl:-ml-[80px]
            2xl:-ml-[0px]
            "
          >
            <TarotCard
              imageSrc="/servicetarotmark2.png"
              nameCard="Natal Birth Chart Analysis"
              describeCard="Explain the significance of the Sun, Moon, and Rising signs, along with planetary placements Interactive birth chart generator where users input their details."
            />
          </div>
          <div
            className="z-3 -ml-[370px] transition-all duration-300
            md:-ml-[300px] md:mt-20 md:rotate-[20deg]
            lg:-ml-[170px] lg:mt-30 lg:rotate-[30deg]
            xl:-ml-[80px] xl:mt-40 xl:rotate-[40deg]
            2xl:-ml-[0px]
            "
          >
            <TarotCard
              imageSrc="/servicetarotmark3.png"
              nameCard="Couples Compatibility Report"
              describeCard="Insights into emotional, intellectual, and physical compatibility. Users enter their birth details to receive a compatibility score and analysis."
            />
          </div>
        </div>
      </div>
      <div className="bg-[#E6E6FA] flex flex-col">
        <p className="text-[#1A1A40] w-[30vw] text-center text-base font-bold pt-[10vw] ml-[7vw]
        sm:text-xl
        md:text-2xl
        lg:text-4xl
        xl:text-5xl
        ">
          “ Over 10 years of experience in astrology ”
        </p>
        <button className="bg-[#ffd700] text-[#1A1A40] text-xs px-2 py-1 rounded-full mt-[3vw] w-[40vw] ml-[3vw]
        sm:text-xs
        md:text-base
        lg:text-xl
        xl:text-3xl
        ">
          Tailored reading just for you
        </button>
        <div className="relative z-3 items-center justify-center">
          <Image
            src="/hand.png"
            alt="Hand with stars"
            width={2880}
            height={0}
            priority
            className="w-full h-auto object-cover -mt-[45vw]
            2xl:-mt-[38vw]
            "
          />
        </div>
      </div>
    </div>
  );
}
// This code defines a ServicesBanner component that displays a banner for astrology services.
