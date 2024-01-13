import { useEffect } from 'react';

export const DoNotCopy = () => {
  useEffect(() => {
    const preventDragStart = (event) => {
      event.preventDefault();
    };

    document.addEventListener('dragstart', preventDragStart);

    return () => {
      document.removeEventListener('dragstart', preventDragStart);
    };
  }, []);
};
