import React, {Component} from 'react';
import gif from "../../img/example-1.gif"

class Gif extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<img src={gif} className="Gif"/>);
    }
}

export default Gif;