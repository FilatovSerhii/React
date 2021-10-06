/* В файле src/Profile.jsx, опишите компоненту, которая принимает объект пользователя в свойстве userData 
({ firstName: 'John', lastName: 'Doe' }) и отрисовует компоненту UserForm
*/

import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = ({userData, handleChange}) => {
  return (
    <div className="column">
      <UserForm userData={userData} handleChange={handleChange} />
    </div>
  );
}

export default Profile;