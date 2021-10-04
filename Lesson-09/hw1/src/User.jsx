/*В файле src/User.jsx, описать компоненту, которая принимает имя и возраст пользователя в свойствах name и age 
соответственно. Отрисовывает данные пользователя
*/

import React from 'react';

const User = ({name, age}) => {
  return <li className="user">
          <span className="user__name">{name}</span>
          <span className="user__age">{age}</span>
        </li>;
};

export default User;
