import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <footer className="Footer">
                <p className="Footer-p">@by Mário Rodeghiero</p>
            </footer>
        );
    }
}

export default Footer;