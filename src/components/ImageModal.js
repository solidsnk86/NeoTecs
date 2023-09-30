import { useState } from 'react';
import Modal from 'react-modal';

export function ImageModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
    >
      <img
        src="https://github.com/solidsnk86/NeoTecs/blob/master/public/images/protocolo-ip-ubiquiti.png?raw=true"
        alt="imágen menú principal ubiquiti os"
        style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
      />
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
}
