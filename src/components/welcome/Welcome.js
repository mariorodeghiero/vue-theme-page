import React, { Component } from "react";
import logo from "../../img/logo.png";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome animated fadeIn">
        <h1 className="App-title">Vue Theme</h1>
        <p className="Installs">+10700 Developer using.</p>
        <p className="App-intro">
          Theme for Visual Studio Code inspired by Vue.js
        </p>
      </div>
    );
  }
}

export default Welcome;
