import React, { Component } from "react";
import css from "../../img/css.svg";
import php from "../../img/php.svg";
import js from "../../img/js.svg";
import json from "../../img/json.svg";
import scss from "../../img/scss.svg";
import markdown from "../../img/markdown.svg";
import vue from "../../img/vue.svg";
import react from "../../img/react.svg";
import yarn from "../../img/yarn.svg";
import html from "../../img/html.svg";

class Syntax extends Component {
  render() {
    let icons = [html, css, php, js, vue, react, json, scss, markdown, yarn];

    let images = icons.map(icon => {
      return (
        <li>
          <img src={icon} alt="" className="Syntax-icon" />
        </li>
      );
    });
    return (
      <div className="Syntax">
        <h2>Sintax highlighter:</h2>
        <ul>{images}</ul>
      </div>
    );
  }
}
export default Syntax;
