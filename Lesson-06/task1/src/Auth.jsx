import React, { Component } from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>
          {this.state.isLoggedIn ? (
            <Logout onLogout={this.handleLogout.bind(this)} />
          ) : (
            <Login onLogin={this.handleLogin.bind(this)} />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
