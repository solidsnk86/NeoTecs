import React from 'react';

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
}) => {
    const imageAlt = `${altImage}` + `,url de la imagen: ${src}`;
    return (
        <figure className="images-client">
            <img
                src={src}
                className={className}
                width={'100%'}
                height={'auto'}
                alt={imageAlt}
                loading='lazy'
            />
        </figure>
    );
};

export default ImageComponent;
