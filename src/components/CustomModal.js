// Modal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onClose, imageURL }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Ampliar Imagen"
    >
      <img
        src={imageURL}
        className="w-full h-full xl:h-[200%] xl:w-[200%]"
        alt="Ampliación de Imagen"
      />
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
