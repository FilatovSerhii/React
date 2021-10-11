import React, { Component } from 'react';

class Expand extends Component {
  state = {
    isOpen: false,
  };

  toggleExpand = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render(){
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleExpand}>{
            this.state.isOpen 
              ? <i className="fas fa-chevron-up"></i>
              : <i className="fas fa-chevron-down"></i> 
          }</button>
        </div>
        {!this.state.isOpen ? null : (<div className="expand__content">{this.props.children}</div>)}
      </div>
    );
  }
};


export default Expand;
