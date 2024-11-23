import React, { useState } from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';

interface ImageWithModalProps {
  src: string;
  className?: string;
  altImage?: string;
}

if (typeof window !== 'undefined') {
  ReactModal.setAppElement('body');
}

const ImageComponent: React.FC<ImageWithModalProps> = ({
  src,
  className,
  altImage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageAlt = `${altImage}, url de la imagen: ${src}`;

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 1000,
    },
    content: {
      top: '0',
      left: '0',
      width: '100%',
      height: 'auto',
      padding: '20px',
      overflow: 'auto',
      backgroundColor: 'transparent',
      border: 'none',
    },
  };

  return (
    <>
      <figure
        className="images-client cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={src}
          className={`${className}`}
          width={1200}
          height={800}
          alt={imageAlt}
          priority
        />
      </figure>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel="Imagen Ampliada"
      >
        <div className="flex flex-col items-center">
          <Image
            src={src}
            width={1980}
            height={1080}
            alt={imageAlt}
            quality={100}
          />
          <small className="text-white font-semibold">{altImage}</small>
          <button
            className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indi-600 transition-colors"
            onClick={() => setIsModalOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </ReactModal>
    </>
  );
};

export default ImageComponent;
