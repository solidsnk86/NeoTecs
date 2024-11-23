import React from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}
if (typeof window !== 'undefined') {
  ReactModal.setAppElement('body');
}

export const CustomModal = ({
  isOpen = false,
  onClose,
  children,
}: ModalProps) => {
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 1000,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      maxWidth: '90vw',
      maxHeight: '90vh',
      overflow: 'auto',
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className="flex flex-col items-center">
        {children}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </ReactModal>
  );
};
