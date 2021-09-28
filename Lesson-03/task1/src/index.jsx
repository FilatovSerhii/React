import React from 'react';
import ReactDOM from 'react-dom';
import SearchFiled from './Search.jsx';
import './index.scss';
import './search.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<SearchFiled name="Bob" />, rootElement);
