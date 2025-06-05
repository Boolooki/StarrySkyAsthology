import React from "react";
import Image from "next/image";

interface TarotCardProps {
  imageSrc: string;
  nameCard: string;
  describeCard: string;
}

const TarotCard: React.FC<TarotCardProps> = ({
  imageSrc,
  nameCard,
  describeCard,
}) => {
  return (
    <div className="flex justify-center items-center bg-[url('/tarotframe.png')] bg-cover bg-center w-[370px] h-[560px] flex-col gap-12">
      <Image
        src={imageSrc}
        alt={nameCard}
        width={220}
        height={0}
      />
      <p className="text-2xl sm:text-xl text-center">{nameCard}</p>
      <p className="w-[80%] text-text-base sm:text-sm text-center">
        {describeCard}
      </p>
    </div>
  );
};

export default TarotCard;
