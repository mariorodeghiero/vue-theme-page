import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Vue Theme</h1>
        <span>+6834 Develper using.</span>
        <p className="App-intro">Theme for Visual Studio Code inspired by Vue.js</p>
      </div>
    );
  }
}

export default App;