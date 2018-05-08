import React, {Component} from 'react';

class Available extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h2>Available for:</h2>
                <div class="Wrapper">
                    <div className="Box">Aton</div>
                    <div className="Box">Vs Code</div>
                    <div className="Box">Iterm</div>
                </div>
            </div>
        );
    }
}

export default Available;