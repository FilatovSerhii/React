import React from 'react';

const Message = ({ text }) => {
  // отмена рендеринга
  if (!text) {
    return null;
  }
  return <div className="message">{text}</div>;
};

export default Message;
