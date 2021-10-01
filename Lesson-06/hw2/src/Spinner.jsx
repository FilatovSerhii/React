import React from 'react';

const Spinner = ({ size }) => {
  return (
    <span
      style={{ width: `${size}px`, height: `${size}px` }}
      className="spinner"
    ></span>
  );
};

export default Spinner;
