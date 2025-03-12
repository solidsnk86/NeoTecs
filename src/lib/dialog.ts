import { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

export const showDialog = ({ content }: { content: ReactNode }) => {
  const dialog = document.createElement('dialog');
  document.body.appendChild(dialog);

  const root = createRoot(dialog);
  root.render(content);
  dialog.showModal();

  const controller = new AbortController();
  const closeDialogWithEffect = () => {
    dialog.style.animation = 'slideOut 0.3s ease-in-out';

    dialog.addEventListener(
      'animationend',
      () => {
        dialog.close();
        dialog.remove();
        root.unmount();
        controller.abort();
      },
      { once: true, signal: controller.signal },
    );
  };

  dialog.addEventListener('click', (event: MouseEvent) => {
    const firstChildrenDialog = document.querySelector('dialog')?.children[0];
    if (dialog.open && !firstChildrenDialog?.contains(event.target as Node)) {
      closeDialogWithEffect();
    }
  });
};
