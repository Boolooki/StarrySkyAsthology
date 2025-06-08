import Image from "next/image";

export default function WhyChooseUsBanner() {
  return (
    <div
      className="bg-[#1A1A40] snap-start snap-always pb-[10vw]
    xl:pb-[5vw]"
    >
      <div
        className="text-center text-[#ffd700] font-bold text-xl pt-[25vw] mb-[5vw]
        sm:text-2xl sm:pt-[20vw]
        md:text-2xl md:pt-[15vw] md:mb-[5vw]
        lg:text-3xl
        xl:text-4xl xl:pt-[10vw] xl:mb-[3vw]
        2xl:text-6xl"
      >
        <p>Why Choose Us?</p>
      </div>
      <div className="xl:flex items-center justify-between
      lg:ml-[5vw] lg:mr-[5vw]">
        <div
          className="items-center justify-center transition-all duration-300
      lg:flex
      xl:block xl:w-[33%]"
        >
          <Image
            src="/whymark1.png"
            alt="Why Choose Us mark"
            width={220}
            height={0}
            className="w-[18vw] justify-self-center
          lg:w-[50vw]
          xl:w-[10vw]
          2xl:w-[10vw]"
          />
          <div className="text-white text-center ml-[5vw] mr-[5vw]">
            <p
              className="text-base mt-[5vw]
          sm:text-xl
          md:text-xl
          lg:text-2xl
          xl:text-2xl
          2xl:text-4xl"
            >
              Expert Guidance with Intuitive Accuracy
            </p>
            <p
              className="text-sm mt-[2.5vw] mb-[10vw]
          sm:text-sm
          md:text-base 
          lg:text-base lg:mb-[5vw]
          xl:text-base
          2xl:text-2xl"
            >
              Our seasoned astrologers and tarot readers are deeply attuned to
              the cosmic energies, ensuring insightful readings that resonate
              with your personal journey. With years of experience and an
              intuitive connection to the cards and stars, we guide you toward
              clarity and enlightenment
            </p>
          </div>
        </div>
        <div
          className="items-center justify-center transition-all duration-300
      lg:flex
      xl:block xl:w-[33%]"
        >
          <Image
            src="/whymark2.png"
            alt="Why Choose Us mark"
            width={220}
            height={0}
            className="w-[18vw] justify-self-center
          lg:w-[50vw]
          xl:w-[10vw]
          2xl:w-[30vw]"
          />
          <div className="text-white text-center ml-[5vw] mr-[5vw]">
            <p
              className="text-base mt-[5vw]
          sm:text-xl
          md:text-xl
          lg:text-2xl
          xl:text-2xl
          2xl:text-4xl"
            >
              Personalized & Empowering Readings
            </p>
            <p
              className="text-sm mt-[2.5vw] mb-[10vw]
          sm:text-sm
          md:text-base 
          lg:text-base lg:mb-[5vw]
          xl:text-base
          2xl:text-2xl"
            >
              We believe fate is a path, not a fixed destination. Every reading
              is tailored to your unique questions and concerns, helping you
              make informed choices rather than simply predicting outcomes. Our
              approach empowers you to embrace your destiny with confidence and
              wisdom.
            </p>
          </div>
        </div>
        <div
          className="items-center justify-center transition-all duration-300
      lg:flex
      xl:block xl:w-[33%]"
        >
          <Image
            src="/whymark3.png"
            alt="Why Choose Us mark"
            width={220}
            height={0}
            className="w-[18vw] justify-self-center
          lg:w-[50vw]
          xl:w-[10vw]
          2xl:w-[30vw]"
          />
          <div className="text-white text-center ml-[5vw] mr-[5vw]">
            <p
              className="text-base mt-[5vw]
          sm:text-xl
          md:text-xl
          lg:text-2xl
          xl:text-2xl
          2xl:text-4xl"
            >
              Safe and Transformative Experience
            </p>
            <p
              className="text-sm mt-[2.5vw] mb-[10vw]
          sm:text-sm
          md:text-base 
          lg:text-base lg:mb-[5vw]
          xl:text-base
          2xl:text-2xl"
            >
              Whether you are seeking clarity, healing, or direction, we provide
              a welcoming and supportive space for your spiritual journey. With
              a focus on positivity and self-discovery, our readings are
              designed to inspire, soothe, and uplift.and self-discovery and
              self-discovery and self-discovery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
