import React from 'react';
import UserForm from './UserForm.jsx';

function createUser(user){
  console.log(user);
}

const App = () => {
  return <UserForm onSubmit={createUser}/>;
};

export default App;
