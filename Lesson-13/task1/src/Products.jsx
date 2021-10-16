import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
 return (
   <div className="page__content">
     <h1>Products</h1>
     <p>We will add some products. Later... 😇</p>
     <Link to="/contacts">To Contacts</Link>
     {/* <a href="/contacts">Contacts</a> */}
   </div>
 );
}

export default Products;