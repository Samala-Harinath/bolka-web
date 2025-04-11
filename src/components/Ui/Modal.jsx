
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children, backdropClose, className }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
       <div
  className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.3)]"
  onClick={backdropClose ? onClose : undefined}
>
            <div className={`z-10  bg-[#fff] group mx-4 shadow-lg p-4 w-full  max-h-[600px] overflow-visible no-scrollbar overflow-y-auto max-w-2xl rounded-[36px] ${className}`} onClick={(e) => e.stopPropagation()} >
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default Modal;