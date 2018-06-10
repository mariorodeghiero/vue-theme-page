import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Welcome from "./components/welcome/Welcome";
import Available from "./components/available/Available";
import Gif from "./components/gif/Gif";
import Button from "./components/button/Button";
import Overview from "./components/overview/overview";
import Syntax from "./components/syntax/Syntax";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Welcome />
          <Gif />
          <Button />
          <div className="Container animated fadeIn">
            <Overview />
            <Syntax />
          </div>
          <Available />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
