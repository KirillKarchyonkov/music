import './CustomModal.css';
import Modal from "react-modal";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomModal({isOpen, onClose}: CustomModalProps) {

    return (
      <Modal
        isOpen={isOpen}
        className={"relative w-150 h-125 bg-[#181818] my-12 mx-auto rounded-[10px]"}
        overlayClassName={"fixed top-0 left-0 w-full h-full overflow-hidden overflow-y-auto z-[999] opacity-0 bg-black/70"}
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
        className='transition-opacity delay-200 ease-in-out absolute top-0 right-[-50px] hover:opacity-50'
        onClick={() => onClose()}
      >
        <line x1="13" y1="13" x2="37" y2="37" />
        <line x1="37" y1="13" x2="13" y2="37" />
    </svg>
      </Modal>
    )
  }