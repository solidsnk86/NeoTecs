import Image from 'next/image';
import React from 'react';

interface ImageComponentProps {
  src: string;
  className?: string;
  altImage?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  className,
  altImage,
}) => {
  const imageAlt = `${altImage}, url de la imagen: ${src}`;
  return (
    <figure className="images-client">
      <Image
        src={src}
        className={`aspect-[16/9] ${className}`}
        width={1600}
        height={900}
        alt={imageAlt}
        priority
      />
    </figure>
  );
};

export default ImageComponent;
