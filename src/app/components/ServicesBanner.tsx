"use client";
// import React, { useEffect, useState } from "react";
import TarotCard from "./TarotCard";
import Image from "next/image";
//Understanding the tarotCardSrc array//
// const tarotCardSrc = [
//   {
//     imageSrc: "/servicetarotmark1.png",
//     nameCard: "Daily Horoscope Readings",
//     describeCard:
//       "Short, engaging predictions for love, career, health, and personal growth Users can select their zodiac sign to view personalized readings.",
//     className: `z-1 transition-all duration-300 md:mt-20 md:rotate-[-20deg] lg:mt-30 lg:rotate-[-30deg] xl:mt-40 xl:rotate-[-40deg]`,
//   },
//   {
//     imageSrc: "/servicetarotmark2.png",
//     nameCard: "Natal Birth Chart Analysis",
//     describeCard:
//       "Explain the significance of the Sun, Moon, and Rising signs, along with planetary placements Interactive birth chart generator where users input their details.",
//     className: `z-2 -ml-[370px] transition-all duration-300 md:-ml-[300px] lg:-ml-[170px] xl:-ml-[80px] 2xl:-ml-[0px]`,
//   },
//   {
//     imageSrc: "/servicetarotmark3.png",
//     nameCard: "Couples Compatibility Report",
//     describeCard:
//       "Insights into emotional, intellectual, and physical compatibility. Users enter their birth details to receive a compatibility score and analysis.",
//     className: `z-3 -ml-[370px] transition-all duration-300 md:-ml-[300px] md:mt-20 md:rotate-[20deg] lg:-ml-[170px] lg:mt-30 lg:rotate-[30deg] xl:-ml-[80px] xl:mt-40 xl:rotate-[40deg] 2xl:-ml-[0px]`,
//   },
// ];
//Digest section//
export default function ServicesBanner() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const newIndex = Math.min(tarotCardSrc.length - 1, Math.floor(scrollPosition / 500));
  //     setCurrentIndex(newIndex);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [currentIndex]);

  return (
    <div className="snap-start snap-always">
      <div className="flex flex-col items-center justify-center bg-[url('/servicebg.png')] bg-cover bg-center text-white text-center p-8">
        <h1 className="transition-all duration-300 text-[#ffd700] font-bold text-4xl md:text-5xl mt-10 mb-1">
          Our Services
        </h1>
        <h2 className="transition-all duration-300 text-[#ffd700] font-normal text-1xl md:text-2xl mb-5 ">
          Explore Our Personalized Astrology Offerings
        </h2>
        {/* <div className="flex items-center justify-center">
          {tarotCardSrc.map((card, index) => (
            <div
              key={index}
              className={`${card.className} ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 object-cover`}
            >
              <TarotCard
                imageSrc={card.imageSrc}
                nameCard={card.nameCard}
                describeCard={card.describeCard}
              />
            </div>
          ))}
        </div> */}
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
      <div className="bg-[#E6E6FA] flex flex-col snap-end snap-always">
        <p
          className="text-[#1A1A40] w-[30vw] text-center text-base font-bold pt-[10vw] ml-[7vw]
        sm:text-xl
        md:text-2xl
        lg:text-4xl
        xl:text-5xl
        2xl:pt-[15vw]
        "
        >
          “ Over 10 years of experience in astrology ”
        </p>
        <a
          href="#book-a-reading"
          className="bg-[#ffd700] text-[#1A1A40] text-xs px-2 py-1 rounded-full mt-[3vw] w-[40vw] ml-[3vw] text-center
        sm:text-xs
        md:text-base
        lg:text-xl
        xl:text-3xl
        hover:bg-yellow-400 transition-colors duration-200
        "
        >
          Tailored reading just for you
        </a>
        <div className="relative z-3 items-center justify-center">
          <Image
            src="/hand.png"
            alt="Hand with stars"
            width={2880}
            height={0}
            priority
            className="w-full h-auto object-cover -mt-[45vw] pointer-events-none
            xl:-mt-[41vw]
            "
          />
        </div>
      </div>
    </div>
  );
}
