import React, { Component } from 'react';

const offText = 'Off';
const onText = 'On';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: offText,
    };
  }

  toggleText() {
    this.setState({
      text: this.state.text === offText 
      ? onText 
      : offText,
    });
  }

  render() {
    return (
      <button className="toggler" onClick={this.toggleText.bind(this)}>
        {this.state.text}
      </button>
    );
  }
}

export default Toggler;
