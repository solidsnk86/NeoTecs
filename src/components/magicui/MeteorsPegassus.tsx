// 'use client' no es necesario y debe ser 'use strict'

import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

interface MeteorsProps {
    top: string;
    left: string;
    animationDelay: string;
    animationDuration: string;
}

interface MeteorsProps {
    number?: number;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 20 }) => {
    const [meteorStyles, setMeteorStyles] = useState<MeteorsProps[]>([]);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // get height of container using ref
        const height = ref.current?.clientHeight || 0;

        const styles = [...new Array(number)].map(() => ({
            top: Math.floor(Math.random() * height) + 'px',
            left: Math.floor(Math.random() * window.innerWidth) + 'px',
            animationDelay: Math.random() * 1 + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * 8 + 2) + 's',
        }));

        setMeteorStyles(styles);
    }, [number]);

    return (
        <div
            ref={ref}
            className='absolute overflow-hidden inset-0 w-full h-full animate-fade animate-once animate-duration-1000 z-[-1]'
        >
            {meteorStyles.map((style, idx) => (
                // Meteor Head
                <span
                    key={idx}
                    className={clsx(
                        'pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] opacity-0 animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]'
                    )}
                    style={style}
                >
                    {/* Meteor Tail */}
                    <div className='pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent' />
                </span>
            ))}
        </div>
    );
};
