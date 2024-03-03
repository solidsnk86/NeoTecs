import React from 'react';
import Link from 'next/link';
import { icons } from 'lucide-react';

export const LinkButton = ({ url, children, className, color, iconName }) => {
    const Icon = icons[iconName];

    return (
        <div className={`${className} inline ml-1`}>
            <Link href={`${url}`} className={`text-${color} underline link`}
                target='_blank'
                rel='noopener'
            >
                {children}
                {Icon && <Icon className={`w-[10px] h-[10px] xl:w-[14px] xl:h-[14px] text-${color} link-icon`} />}
            </Link>
        </div>
    );
};

export default LinkButton