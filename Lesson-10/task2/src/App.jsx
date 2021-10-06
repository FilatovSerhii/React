/* В файле src/App.jsx, опишите компоненту, которая содержит поле ввода для текста и кнопку поиска
В файле src/App.jsx, опишите компоненту, которая хранит в состоянии объект пользователя.
App должна отрисовать ShoppingCart и Profile, а так же заголовок с текстом Hello, John, 
где John - имя пользователя.

*/

import React, { Component } from 'react';
import Profile from './Profile.jsx';
import ShoppingCart from './ShoppingCart.jsx';

class Page extends Component{
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    }
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      userData:{
        ...this.state.userData,
        [name]: value
      }
    })
  }

  render(){
    const {firstName, lastName} = this.state.userData;
    return (
      <div className="page">
        <h1 className="title">Hello, {firstName} {lastName}</h1>
        <main className="content">
          <ShoppingCart userName={firstName} />
          <Profile userData={this.state.userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  };
};

export default Page;
