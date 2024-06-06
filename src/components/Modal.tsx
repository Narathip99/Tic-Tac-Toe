import React from "react";

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white px-16 py-8 rounded shadow-lg">
        <h2 className="text-2xl text-black font-bold mb-4">Game Over!</h2>
        <p className="mb-4 text-black">{message}</p>
        <button
          className="p-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
