/* В файле src/UserForm.jsx, опишите компоненту, которая принимает объект пользователя
 в свойстве userData ({ firstName: 'John', lastName: 'Doe' }) 
 и отрисовует поля для редактирования lastName и firstName. 
 UserForm не должна сама хранить состояние, а должна изменять данные пользователя, который храниться в App
*/

import React from 'react';


const UserForm = ({userData, handleChange}) => {
  return(
    <form className="user-form">
      <input 
        type="text" 
        name="firstName" 
        className="user-form__input" 
        value={userData.firstName}
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="lastName" 
        className="user-form__input" 
        value={userData.lastName} 
        onChange={handleChange}
      />
    </form>
  )
};

export default UserForm;
