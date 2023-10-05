import React, { Children, cloneElement } from 'react';
import { cn } from '../../lib/utils';

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    [key: string]: unknown;
}

export const Marquee = ({
    className,
    reverse,
    pauseOnHover = false,
    children,
    ...props
}: MarqueeProps) => {
    return (
        <div
            {...props}
            className={cn(
                'flex w-full overflow-x-hidden [--duration:40s] [--gap:5rem]',
                className
            )}
        >
            <div
                className={cn('flex w-max animate-marquee items-stretch gap-[--gap]', {
                    '[animation-direction:reverse]': reverse,
                    'hover:[animation-play-state:paused]': pauseOnHover,
                })}
            >
                {Children.map(children, (child) => cloneElement(child as any))}
                {Children.map(children, (child) => cloneElement(child as any))}
            </div>
        </div>
    );
};

Marquee.defaultProps = {
    className: '',
    reverse: false,
    pauseOnHover: false,
};
