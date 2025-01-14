import React from 'react';

export const Thermometer = ({ temperature, className = '' }) => {
  const getFillColor = (temp) => {
    if (temp < 10) return ['#A5B4FC', '#0080FF']; // Azul para frío
    if (temp < 20) return ['#A7F3D0', '#4CBB17']; // Verde para templado
    if (temp < 30) return ['#FFD700', '#FDE68A']; // Amarillo para cálido
    return ['#F9A8D4', '#F87171']; // Rojo para caliente
  };

  const colors = getFillColor(temperature);

  return (
    <svg
      width="30"
      height="40"
      viewBox="0 0 100 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradiente para el cristal */}
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{ stopColor: '#ffffff', stopOpacity: 0.5 }}
          />
          <stop
            offset="50%"
            style={{ stopColor: '#ffffff', stopOpacity: 0.1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: '#ffffff', stopOpacity: 0.3 }}
          />
        </linearGradient>

        {/* Gradiente para el mercurio */}
        <linearGradient id="mercuryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: colors[0] }} />
          <stop offset="100%" style={{ stopColor: colors[1] }} />
        </linearGradient>

        {/* Gradiente para el bulbo */}
        <radialGradient id="bulbGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style={{ stopColor: colors[0] }} />
          <stop offset="100%" style={{ stopColor: colors[1] }} />
        </radialGradient>
      </defs>

      {/* Sombra del termómetro */}
      <path
        d="M45,40 L45,240 Q45,260 35,260 Q25,260 25,240 L25,40 Q25,30 35,30 Q45,30 45,40"
        fill="#00000020"
        transform="translate(5,5)"
      />

      {/* Tubo exterior (cristal) */}
      <path
        d="M45,40 L45,240 Q45,260 35,260 Q25,260 25,240 L25,40 Q25,30 35,30 Q45,30 45,40"
        fill="white"
        stroke="#DDD"
        strokeWidth="2"
      />

      {/* Efecto de cristal */}
      <path
        d="M45,40 L45,240 Q45,260 35,260 Q25,260 25,240 L25,40 Q25,30 35,30 Q45,30 45,40"
        fill="url(#glassGradient)"
        opacity="0.7"
      />

      {/* Bulbo del termómetro */}
      <circle
        cx="35"
        cy="260"
        r="20"
        fill="url(#bulbGradient)"
        stroke="#DDD"
        strokeWidth="2"
      />

      {/* Mercurio en el tubo */}
      <rect
        x="30"
        y={240 - (200 * temperature) / 100}
        width="10"
        height={(200 * temperature) / 100}
        fill="url(#mercuryGradient)"
        rx="5"
      />

      {/* Marcas de temperatura */}
      {[0, 25, 50, 75, 100].map((mark, index) => (
        <g key={mark}>
          <line
            x1="45"
            y1={240 - (200 * mark) / 100}
            x2="50"
            y2={240 - (200 * mark) / 100}
            stroke="#666"
            strokeWidth="1"
          />
          <text
            x="55"
            y={240 - (200 * mark) / 100 + 5}
            fill="#666"
            fontSize="12"
          >
            {mark}°
          </text>
        </g>
      ))}
    </svg>
  );
};

export default Thermometer;
