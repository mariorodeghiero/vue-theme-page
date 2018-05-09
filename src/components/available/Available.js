import React, {Component} from 'react';
import vscode from '../../img/vscode.svg'

class Available extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Available">
                <h2>Available for:</h2>
                <div class="Wrapper">
                    <div className="Box"></div>
                    <div className="Box">
                        <img
                            src={vscode}
                            className="Available-logo"
                            title="Visual Studio code"
                            alt="Visual Studio Code"/>
                    </div>
                    <div className="Box"></div>
                </div>
            </div>
        );
    }
}

export default Available;