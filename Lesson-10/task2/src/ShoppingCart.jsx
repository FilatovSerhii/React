/* В файле src/ShoppingCart.jsx, опишите компоненту, которая принимает имя пользователя 
в свойстве userName и хранит в состоянии массив товаров. 
App. ShoppingCart должна отрисовать CartTitle и ProductsList
*/

import React, { Component } from 'react';
import ProductsList from './ProductsList.jsx';
import CartTitle from './CartTitle.jsx';


class ShoppingCart extends Component {
  state = {
    cartItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };

  render(){
    const count = this.state.cartItems.length;

    return(
      <div className="column">
        <CartTitle userName={this.props.userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    )
  }
};

export default ShoppingCart;
