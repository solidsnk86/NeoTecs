import React from 'react';
import styled from 'styled-components';

interface HighlightProps {
  className?: string;
  color1?: string;
  color2?: string;
  size?: string;
  children: React.ReactNode;
}

const HighlightSpan = styled.span<{
  color1?: string;
  color2?: string;
  size?: string;
}>`
  position: relative;
  z-index: 0;
  -webkit-text-stroke: 1.5px;
  -webkit-text-stroke-color: #09090b;

  &::before {
    content: '';
    position: absolute;
    top: -0.1em;
    left: -0.4em;
    right: -0.4em;
    bottom: -1em;
    height: ${({ size }) => `calc(100% + ${size || '1.5em'})`};
    mask-image: url('/images/cranyon-effect.png');
    mask-size: contain;
    mask-repeat: no-repeat;
    z-index: -1;
    background: ${({ color1, color2 }) =>
      `linear-gradient(to bottom, ${color1 || 'yellow'}, ${
        color2 || 'orange'
      })`};
    overflow: visible; /* Permite que el contenido se desborde */
  }
`;

export const CranyonHighlight: React.FC<HighlightProps> = ({
  className,
  color1,
  color2,
  size,
  children,
}) => {
  return (
    <HighlightSpan
      className={className}
      color1={color1}
      color2={color2}
      size={size}
    >
      {children}
    </HighlightSpan>
  );
};
