export const DoNotCopy = () => {
  const preventContextMenu = (event) => {
    event.preventDefault();
  };
  const preventDragStart = (e) => {
    e.preventDefault();
  };

  document.addEventListener(
    'contextmenu',
    preventContextMenu,
    preventDragStart,
  );
};
