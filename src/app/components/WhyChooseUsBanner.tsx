import Image from "next/image";

export default function WhyChooseUsBanner() {
  return (
    <div className="bg-[#1A1A40]">
      <div
        className="text-center text-[#ffd700] font-bold text-4xl pt-[20vw] mb-[5vw]
      lg:text-5xl"
      >
        <p>Why Choose Us?</p>
      </div>
      <div
        className="items-center justify-center transition-all duration-300
      lg:flex lg:ml-[5vw]"
      >
        <Image
          src="/whymark1.png"
          alt="Why Choose Us mark"
          width={220}
          height={0}
          className="w-[25vw] justify-self-center
          lg:w-[50vw]
          xl:w-[40vw]
          2xl:w-[30vw]"
        />
        <div className="text-white text-center ml-[5vw] mr-[5vw]">
          <p
            className="text-xl mt-[10vw]
          sm:text-3xl
          lg:text-4xl
          xl:text-5xl
          2xl:text-6xl"
          >
            Expert Guidance with Intuitive Accuracy
          </p>
          <p
            className="text-sm mt-[5vw] pb-[10vw]
          lg:text-base lg:mt-[2vw]
          sm:text-xl
          md:text-2xl
          lg:text-3xl"
          >
            Our seasoned astrologers and tarot readers are deeply attuned to the
            cosmic energies, ensuring insightful readings that resonate with
            your personal journey. With years of experience and an intuitive
            connection to the cards and stars, we guide you toward clarity and
            enlightenment
          </p>
        </div>
      </div>
      <div
        className="items-center justify-center transition-all duration-300
      lg:flex lg:ml-[5vw]"
      >
        <Image
          src="/whymark2.png"
          alt="Why Choose Us mark"
          width={220}
          height={0}
          className="w-[25vw] justify-self-center
          lg:w-[50vw]
          xl:w-[40vw]
          2xl:w-[30vw]"
        />
        <div className="text-white text-center ml-[5vw] mr-[5vw]">
          <p
            className="text-xl mt-[10vw]
          sm:text-3xl
          lg:text-4xl
          xl:text-5xl
          2xl:text-6xl"
          >
            Personalized & Empowering Readings
          </p>
          <p
            className="text-sm mt-[5vw] pb-[10vw]
          lg:text-base lg:mt-[2vw]
          sm:text-xl
          md:text-2xl
          lg:text-3xl"
          >
            We believe fate is a path, not a fixed destination. Every reading is
            tailored to your unique questions and concerns, helping you make
            informed choices rather than simply predicting outcomes. Our
            approach empowers you to embrace your destiny with confidence and
            wisdom.
          </p>
        </div>
      </div>
      <div
        className="items-center justify-center transition-all duration-300
      lg:flex lg:ml-[5vw]"
      >
        <Image
          src="/whymark3.png"
          alt="Why Choose Us mark"
          width={220}
          height={0}
          className="w-[25vw] justify-self-center
          lg:w-[50vw]
          xl:w-[40vw]
          2xl:w-[30vw]"
        />
        <div className="text-white text-center ml-[5vw] mr-[5vw]">
          <p
            className="text-xl mt-[10vw]
          sm:text-3xl
          lg:text-4xl
          xl:text-5xl
          2xl:text-6xl"
          >
            Safe and Transformative Experience
          </p>
          <p
            className="text-sm mt-[5vw] pb-[10vw]
          lg:text-base lg:mt-[2vw]
          sm:text-xl
          md:text-2xl
          lg:text-3xl"
          >
            Whether you are seeking clarity, healing, or direction, we provide a
            welcoming and supportive space for your spiritual journey. With a
            focus on positivity and self-discovery, our readings are designed to
            inspire, soothe, and uplift.and self-discovery and self-discovery
            and self-discovery
          </p>
        </div>
      </div>
    </div>
  );
}
