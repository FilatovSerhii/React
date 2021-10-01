import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const Status = ({ isOnline = true }) => {  // имитация статуса online
  return (
    <div className="status">
      {isOnline ? 
      <Online /> 
      : <Offline />}
    </div>
  );
};

export default Status;
