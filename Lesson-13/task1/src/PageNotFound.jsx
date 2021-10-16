import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page__content">
      <h1>😢</h1>
      <Link to="/">Go home</Link>
      {/* <a href="/">Go home</a> */}
    </div>
  );
}

export default PageNotFound;
