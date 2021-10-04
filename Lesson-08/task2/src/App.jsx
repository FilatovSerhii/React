import React, { Component } from 'react';
import Clock from './Clock.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.visible && <Clock location="New York" offset={-5} />}
        {this.state.visible && <Clock location="Kyiv" offset={2} />}
        {this.state.visible && <Clock location="London" offset={0} />}
      </>
    );
  }
}

export default App;
