import { useState, useEffect } from 'react';

const ColorChangingComponent = () => {
  const [currentColor, setCurrentColor] = useState('#C084FC');
  const intervalInDays = 1;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newColor = getRandomColor();
      setCurrentColor(newColor);
    }, intervalInDays * 24 * 60 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getRandomColor = () => {
    const colors = ['#C084FC', '#3b82f6', '#ff6699'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return currentColor;
};

export default ColorChangingComponent;
