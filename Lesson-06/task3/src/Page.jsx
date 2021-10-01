import React, { Component } from 'react';
import Message from './Message.jsx';

const text1 = 'Hello, world!';
const text2 = 'Another exciting text.';

class Page extends Component {
  state = {  // если конструктор используеться только для задания стейта и ничего не баиндется то можно использовать такой синтоксис
    // создаем начальное состояние
    text: null, // в начале ничего не будет - будет пусто
  };
  //- так в уроке
  // constructor(props) {
  //   super(props)
  //   this.state = {        // создаем начальное состояние
  //     text: null,    // в начале ничего не будет - будет пусто
  //   };

  setText = (text) => {
    this.setState({
      text,
    });
  };

  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          <button className="btn" onClick={() => this.setText(text1)}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.setText(text2)}>
            Text 2
          </button>
          <button className="btn" onClick={() => this.setText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;
