import { ReactNode } from 'react';

export const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <dialog>
      <div>{children}</div>
      <form method="dialog">
        <button>Cerrar</button>
      </form>
    </dialog>
  );
};
