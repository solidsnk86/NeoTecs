import React from 'react';
import Link from 'next/link';
import { icons } from 'lucide-react';

interface LinkInterfaceProps {
  url: string;
  children?: string;
  className?: string;
  underline?: boolean;
  color: string;
  iconName?: string;
  target?: string;
  download?: boolean;
}

const LinkButton: React.FC<LinkInterfaceProps> = ({
  url,
  children,
  className,
  color,
  iconName,
  target,
  download,
  underline,
}) => {
  const Icon = icons[iconName];

  return (
    <span className={`${className} inline ml-1` || ''}>
      <Link
        href={`${url}`}
        className="link dark:hover:brightness-200 hover:brightness-150 transition-colors duration-300"
        style={{ color: `${color}`, textDecoration: `${underline}` }}
        target={target}
        rel="noopener"
        download={download}
      >
        {children}
        {Icon && (
          <Icon
            className="font-extralight h-[16px] -translate-x-[3px] -translate-y-[1px] inline"
            style={{ color: `${color}` }}
          />
        )}
      </Link>
    </span>
  );
};

export default LinkButton;
