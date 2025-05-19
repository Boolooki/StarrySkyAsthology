import React from 'react';
import Image from 'next/image';

interface ImageFadeProps {
  imageSrc: string;
  altText: string;
}

const ImageFade: React.FC<ImageFadeProps> = ({ imageSrc, altText }) => {
  return (
    <div className="bg-black min-h-screen flex items-stretch p-0">
      <div className="relative w-1/2 min-h-screen">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="50vw"
          className="object-cover w-full h-full mask-image-fade-right"
        />
      </div>
      {/* The right half is empty, or you can add content here */}
      <div className="w-1/2"></div>
    </div>
  );
};

export default ImageFade;