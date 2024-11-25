import React from 'react';
import './modal.scss';

const Modal = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <h2>{title}</h2>
        <div className="modal-content">{children}</div>
        <button className="btn danger" onClick={onClose}>Close</button>
      </div>
    </>
  );
};

export default Modal;
