/*В файле src/Filter.jsx, опиcать компоненту, которая принимает в свойствах filterText - текст, 
по которому происходит фильтрация пользователей,count - к-во найденых пользователей,
 onChange - колбек, который передает изменения из инпута в компоненту UsersList. 
 Filter отображает счетчик найденых пользователей и текстовое поле ввода

*/

import React from 'react';

const Filter = ({filterText, count, onChange}) => {
  return (<>
            <span className="filter__count">{count}</span>
            <input 
              type="text" 
              className="filter__input" 
              // value={filterText} 
              onChange={onChange}
             />
          </>
  );
};

export default Filter;

