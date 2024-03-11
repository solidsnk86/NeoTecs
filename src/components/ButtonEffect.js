import React, { useEffect } from 'react';
import { useTweaks } from 'use-tweaks';

const GLYPHS =
  'ラドクリフマラソンわたしワタシんょンョたばこタバコとうきょうトウキョウ0123456789±!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const ButtonEffect = () => {
  const { explode, speed, text } = useTweaks({
    text: { value: 'Click Me', label: 'Text' },
    speed: {
      value: 0.25,
      label: 'Speed(s)',
      min: 0.1,
      max: 5,
      step: 0.1,
    },
    explode: { value: false, label: 'Explode' },
  });

  useEffect(() => {
    document.body.dataset.explode = explode;
  }, [explode]);

  return (
    <>
      <button style={{ '--speed': speed }}>
        {text.split('').map((char, index) => (
          <span
            key={index}
            data-char={char}
            style={{
              '--index': index,
              '--char-1': `"${
                GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              }"`,
              '--char-2': `"${
                GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              }"`,
              '--char-3': `"${
                GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              }"`,
            }}
          >
            {char}
          </span>
        ))}
        <span className="sr-only">{text}</span>
      </button>
    </>
  );
};

export default ButtonEffect;
