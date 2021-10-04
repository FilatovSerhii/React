import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList.jsx';
import './index.scss';

const users = [
  {
    id: 'id-0',
    age: 39,
    name: 'Ivan',
  },
  {
    id: 'id-1',
    age: 1,
    name: 'David',
  },
  {
    id: 'id-2',
    age: 11,
    name: 'Arsen',
  },
  {
    id: 'id-3',
    age: 13,
    name: 'Nika',
  },
  {
    id: 'id-4',
    age: 39,
    name: 'Vita',
  },
  {
    id: 'id-5',
    age: 38,
    name: 'Vova',
  },
  {
    id: 'id-6',
    age: 36,
    name: 'Inna',
  },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<UsersList users={users} />, rootElement);
