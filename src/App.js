import React, {Component} from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Welcome from './components/welcome/Welcome';
import Available from './components/available/Available';
import Gif from './components/gif/Gif'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
        <Gif/>
        <Available/>
        <Footer/>
      </div>
    );
  }
}

export default App;