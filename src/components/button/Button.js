import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=mariorodeghiero.vue-theme"
          className="Btn animated fadeIn"
        >
          Install
        </a>
        <a
          href="https://github.com/mariorodeghiero/vue-theme-vscode"
          className="Btn animated fadeIn"
        >
          Github
        </a>
      </div>
    );
  }
}

export default Button;
