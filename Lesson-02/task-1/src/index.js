//should render following html

//<h1>Search Form</h1>
//<div>
//    <input type="text" />
//    <button>Search</button>
//</div>

import React from 'react';
import ReactDOM from 'react';

const rootElement = document.querySelector('#root');

const element = (
  <div>
    <h1>Search From</h1>
    <>
      <input type="text" />
      <button>Submit</button>
    </div>
  </>
);

ReactDOM.render(element, rootElement);
