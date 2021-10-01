/*
Алгоритм
1. Импортировать библиотеки реакт и реакт дом, выбрать #root через document.querySelector('#root');
 прописать рендер ReactDOM.render
2. создать TransactionsList.jsx описать компоненту, которая принимает данные о транзакции в свойствах 
{from, to, amount, rate и time}.

3. создать Transaction.jsx 
3.1 импортировать библиотеку moment.js для форматирования даты. 
3.2 числа форматировать с помощью new Intl.NumberFormat, локаль - en-GB - пример 3500 ->3.500

Все компоненты должны экспортироваться из файлов по умолчанию
*/

import React from 'react';
import ReactDOM from 'react-dom';
import TransactionsList from './TransactionsList.jsx';
import './index.scss';

const transactions = [
  {
      id: "id-0",
      from: "USD",
      to: "EUR",
      amount: 1200,
      rate: 0.8,
      time: "2019-01-10T17:08:35.447Z",
  },
  {
      id: "id-1",
      from: "USD",
      to: "UAH",
      amount: 100000,
      rate: 25.7,
      time: "2019-01-10T18:22:35.447Z",
  },
  {
      id: "id-2",
      from: "EUR",
      to: "USD",
      amount: 100,
      rate: 1.1,
      time: "2019-01-10T17:01:35.447Z",
  },
];

const rootElement = document.querySelector('#root');

ReactDOM.render(<TransactionsList transactions={transactions}/>, rootElement);
