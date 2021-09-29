import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Counter />, rootElement);
