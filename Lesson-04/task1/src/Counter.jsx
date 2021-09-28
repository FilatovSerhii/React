import React, { Component } from 'react';
import './counter.scss';

class Counter extends Component {
  constructor(props) { // в конструкторе задаем начальное состояние компонента
    super(props);
    this.state = {//в этом объекте мы храним данные для отрисовки экрана
      counter: props.start,
    };

   // плохая практика для демонстрации
    setInterval(() => {
      this.setState({
        //состояние изменяеться с помощью метода this.setState , setState мы передаем объект с теми свойствами состояния которые мы хотим изменить 
        counter: this.state.counter + 1,// увеличиваем значение счетчика на 1
      });
      //this.state.counter = this.state.counter + 1; - код не работает, счетчик увеличиваеться но компанента не обнавляеться
    }, props.interval);
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
