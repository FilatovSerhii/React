import React from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greeting = ({ isLoggedIn }) => {
  console.log({ isLoggedIn });
  if (isLoggedIn) {
    //если пользователь залогинен отрисовываем компоненту UserGreeting
    return <UserGreeting />;
  }

  return <GuestGreeting />; //если пользователь НЕ залогинен отрисовываем компоненту GuestGreeting
};

export default Greeting;
