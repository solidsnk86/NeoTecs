import React from 'react';
import Link from 'next/link';
import { icons } from 'lucide-react';

interface LinkInterfaceProps {
    url: string,
    children?: string,
    className?: string,
    color: string,
    iconName?: string
    target?: string
}

export const LinkButton: React.FC<LinkInterfaceProps> = ({ url, children, className, color, iconName, target }) => {
    const Icon = icons[iconName];

    return (
        <span className={`${className} inline ml-1` || ''}>
            <Link href={`${url}`} className={`text-${color} underline link dark:hover:brightness-200 hover:brightness-150 transition-colors duration-300`}
                target={`_blank` ? target : null}
                rel='noopener'
            >
                {children}
                {Icon && <Icon className={`w-[10px] h-[10px] xl:w-[14px] xl:h-[14px] text-${color} link-icon`} />}
            </Link>
        </span>
    );
};

export default LinkButton