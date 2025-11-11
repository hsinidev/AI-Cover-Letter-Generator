import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: 'default' | 'large';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'default' }) => {
  if (!isOpen) return null;

  const modalWidthClass = size === 'large' ? 'max-w-5xl' : 'max-w-2xl';

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className={`bg-gray-900 rounded-lg shadow-xl w-full ${modalWidthClass} max-h-[90vh] flex flex-col overflow-hidden p-6 sm:p-8 relative border border-purple-800`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h2 id="modal-title" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white text-3xl transition-colors duration-300"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        <div className="overflow-y-auto pr-2 -mr-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
