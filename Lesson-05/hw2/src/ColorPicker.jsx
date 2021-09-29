import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  fillTitle(colorText) {
    this.setState({
      text: colorText,
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.fillTitle.bind(this, CORAL)}
            onMouseLeave={this.fillTitle.bind(this, '')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.fillTitle.bind(this, AQUA)}
            onMouseLeave={this.fillTitle.bind(this, '')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.fillTitle.bind(this, BISQUE)}
            onMouseLeave={this.fillTitle.bind(this, '')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
