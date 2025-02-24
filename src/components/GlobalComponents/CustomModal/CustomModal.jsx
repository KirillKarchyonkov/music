import './CustomModal.css';
import Modal from "react-modal";

export default function CustomModal({isOpen, onClose/*, submitButton, children*/}) {

    return (
      <Modal
        isOpen={isOpen}
        className={"modal-content"}
        overlayClassName={"modal-overlay"}
        closeTimeoutMS={300}
        onRequestClose={() => onClose()}
        ariaHideApp={false}
      >

        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50"
        height="50"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className='modal-close-button'
        onClick={() => onClose()}
    >
        <line x1="13" y1="13" x2="37" y2="37" />
        <line x1="37" y1="13" x2="13" y2="37" />
    </svg>
      </Modal>
    )
  }