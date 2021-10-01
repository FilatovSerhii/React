import React from 'react';
import Online from './Online.jsx';
import Offline from './Offline.jsx';

const Status = ({ isOnline }) => {  
    <div className="status">
      {isOnline ? 
      <Online /> 
      : <Offline />}
    </div>
};

export default Status;
