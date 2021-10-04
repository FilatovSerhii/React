import React, { Component } from "react";
import ClassNames from "classnames";

class ConnectionStatus extends Component {
  state = {
    isOffline: false,
  };

  componentDidMount() {
    window.addEventListener("online", this.showOnline);
    window.addEventListener("offline", this.showOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.showOnline);
    window.removeEventListener("offline", this.showOffline);
  }

  showOnline = () => {
    this.setState({
      isOffline: false,
    });
  };

  showOffline = () => {
    this.setState({
      isOffline: true,
    });
  };

  render() {
    return (
      <div className={ClassNames("status", { "status_offline": this.state.isOffline })}>
        {this.state.isOffline ? "offline" : "online"}
      </div>
    );
  }
}

export default ConnectionStatus;
