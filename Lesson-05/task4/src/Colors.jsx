import React, { Component } from 'react';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
  setBodyColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          onClick={this.setBodyColor.bind(this, RED)}//здесь метод bind не для того что бы привязать контекст а для того что бы передать аргумент
          style={{
            backgroundColor: RED,
          }}
          className="colors__button"
        />
        <button
          onClick={() => this.setBodyColor(GREEN)}
          style={{
            backgroundColor: GREEN,
          }}
          className="colors__button"
        />
        <button
          onClick={() => this.setBodyColor(BLUE)}
          style={{
            backgroundColor: BLUE,
          }}
          className="colors__button"
        />
      </div>
    );
  }
}

export default Colors;
