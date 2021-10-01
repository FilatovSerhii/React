import React from 'react';
import ReactDOM from 'react-dom';
import NumbersList from './NumbersList.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');
const numbers = [1,2,3,4,5,10,100];

ReactDOM.render(<NumbersList numbers={numbers} />, rootElement);
