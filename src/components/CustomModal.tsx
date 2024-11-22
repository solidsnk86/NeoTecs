import React from 'react';
import Modal from 'react-modal'

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  ImageComp: React.ReactNode;
}

Modal.setAppElement('#root');

export const CustomModal = ({ isOpen, onClose, ImageComp }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ampliar Imagen"
    >
      {ImageComp}
      <button
        className="my-3 bg-button-variant text-text-variant p-2 rounded-full font-semibold hover:opacity-90"
        onClick={onClose}
      >
        Cerrar
      </button>
    </Modal>
  );
};

export default CustomModal;
