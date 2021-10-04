/* В файле src/UsersList.jsx, описать компоненту, которая принимает список пользователей в свойстве users 
и отображает поле для фильтрации и список пользователей
*/

import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {  
  state = {
    value: '',// начальное значение
  };

  handleChange = (event) => {
    const {value} = event.target;
    this.setState({value});
  }

  filterUsers(value){
    return value === '' 
      ? this.props.users 
      : this.props.users.filter(
          ({name}) => name.toLowerCase().includes(value.toLowerCase())
        )
  }

  render(){
    const users = this.filterUsers(this.state.value);

    return (
      <div>
        <div className="filter">
          {<Filter 
            filterText={this.state.value} 
            count={users.length} 
            onChange={this.handleChange}
          />}
        </div>
        <ul className="users">
          {users.map(user => <User key={user.id} {...user}/>)}
        </ul>
      </div>
    );
  }
};

export default UsersList;
