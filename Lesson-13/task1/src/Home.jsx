import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page__content">
      <h1>🏠</h1>
      <Link to="/products">To Products</Link>
    </div>
  );
}

export default Home;
