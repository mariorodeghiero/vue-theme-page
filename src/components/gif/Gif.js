import React, { Component } from "react";
import gif from "../../img/example-1.png";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <img
        src={gif}
        className="Gif animated zoomIn"
        title="Example javascript"
        alt="Example javascript"
      />
    );
  }
}

export default Gif;
