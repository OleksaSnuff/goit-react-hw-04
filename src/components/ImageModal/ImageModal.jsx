import Modal from "react-modal";
import "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function ImageModal({ isModalOpen, closeModal, modalPhoto }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img
        src={modalPhoto.urls.regular}
        alt={modalPhoto.alternative_slugs.en}
      />
    </Modal>
  );
}
export default ImageModal;
