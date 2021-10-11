import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ isOpen, children, title, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <div className="dialog__title">{title}</div>
        <button className="dialog__close-btn" onClick={onClose}>+</button>
      </div>
      <div className="dialog__content"> {children}</div>
    </div>
  )
};

Dialog.prototype = {
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  title:PropTypes.string,
  onClose:PropTypes.func.isRequired,
};

Dialog.defaultProps= {
  title: "",
  isOpen: false,
}

export default Dialog;
