import React, { Component } from 'react';
import Dialog from './Dialog';


class App extends Component {

  state = {
    isOpen:false,

  }

  hideDialog = () => {
    this.setState({
      isOpen: false,
    });
  }
  showDialog = () => {
    this.setState({
      isOpen: true,
    });
  }



  render() {
    const elem = <p>Some text</p>

    return (
      <div className="app">
        <button className="btn" onClick={this.showDialog}>
          Show
        </button>
        <Dialog 
          isOpen={this.state.isOpen} 
          onClose={this.hideDialog}
          title="some title">
          {elem}
        </Dialog>
      </div>
    );
  }
}



export default App;
