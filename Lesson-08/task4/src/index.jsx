import React from 'react';
import ReactDOM from 'react-dom';
import User from './User.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<User userId="facebook"/>, rootElement);
