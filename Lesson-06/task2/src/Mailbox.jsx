import React from 'react';

const Mailbox = ({ unreadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {unreadMessages.length > 0 && ( //нужно следить что бы значение было false, null, undefind
        <span className="mailbox__count">{unreadMessages.length}</span>
      )}
    </div>
  );
};

export default Mailbox;
