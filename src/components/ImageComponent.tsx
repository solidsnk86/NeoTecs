import React from 'react';
import Image from 'next/image';

interface ImageComponentProps {
    src: string;
    className?: string;
    altImage?: string;
    priority?: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
    src,
    className,
    altImage,
    priority,
}) => {
    const imageAlt = `${altImage}` + `,url de la imagen: ${src}`;
    return (
        <figure className="images-client">
            <Image
                src={src}
                className={className}
                width={100}
                height={100}
                alt={imageAlt}
                layout="responsive"
                priority={priority}
            />
        </figure>
    );
};

export default ImageComponent;
