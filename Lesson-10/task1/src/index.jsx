import React from 'react';
import ReactDOM from 'react-dom';
import Page from './App.jsx';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Page userId="github"/>, rootElement);
