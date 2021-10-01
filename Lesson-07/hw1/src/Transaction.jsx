import React from 'react';
import moment from 'moment';


const Transaction = ({from, to, amount, rate, time}) => {
  const [date, timeClock] = moment(time).format('DD MMM_HH:mm').split('_');
  
  return (
    <li className="transaction">
      <span className="transaction__date">{date}</span>
      <span className="transaction__time">{timeClock}</span>
      <span className="transaction__assets">{from} → {to}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{new Intl.NumberFormat("en-GB").format(amount)}</span>
    </li>
  );
};

export default Transaction;
// const Transaction = ({ from, to, amount, rate, time }) => {
//   return (
//     <li className="transaction">
//       <span className="transaction__date">{moment(time).format('DD MMM')}</span>
//       <span className="transaction__time">{moment(time).format('HH : mm')}</span>
//       <span className="transaction__assets">{`${from} → ${to}`}</span>
//       <span className="transaction__rate">{rate}</span>
//       <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
//     </li>
//   );
// };