// Modal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ampliar Imagen"
    >
      <img
        src={image}
        className="w-full h-full xl:h-[200%]"
        alt="Ampliación de Imagen"
      />
      <button
        className="my-3 bg-button-variant text-text-variant p-2 rounded-full"
        onClick={onClose}
      >
        Cerrar
      </button>
    </Modal>
  );
};

export default CustomModal;
