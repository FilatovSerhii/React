import React from 'react';

const User = ({name, age}) => {
  return (
      <li className="user">
        <span className="users__name">{name}</span>
        <span className="users__age">{age}</span>
      </li>
  )
};

export default User;
