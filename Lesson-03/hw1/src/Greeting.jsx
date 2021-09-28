import React from 'react';

const getAge = (date) => {
  const ageDate = new Date(new Date() );
  return Math.abs(ageDate.getUTCFullYear() -2004);
};

export default (props) => (
  <div className="greeting">{`My name is ${props.firstName} ${
    props.lastName
  }. I'm ${getAge(props.birthDate)} years old`}</div>
);
