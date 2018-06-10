import React, { Component } from "react";
import vscode from "../../img/vscode.svg";
import hiper from "../../img/hiper.png";
import iterm2 from "../../img/iterm2.png";

class Available extends Component {
  render() {
    const editors = [hiper, vscode, iterm2];

    let images = editors.map(editor => {
      return (
        <div className="Box">
          <img
            src={editor}
            className="Available-logo Unavailable"
            title="Hiper terminal"
            alt="Hiper terminal"
          />
          <p className="Contributed">Contributed</p>
        </div>
      );
    });
    return (
      <div className="Available animated fadeIn">
        <h2>Available</h2>
        <div class="Wrapper">
          <div className="Box">
            <img
              src={hiper}
              className="Available-logo Unavailable"
              title="Hiper terminal"
              alt="Hiper terminal"
            />
          </div>
          <div className="Box">
            <img
              src={vscode}
              className="Available-logo"
              title="Visual Studio code"
              alt="Visual Studio Code"
            />
          </div>
          <div className="Box">
            <img
              src={iterm2}
              className="Available-logo Unavailable"
              title="Iterm2"
              alt="Iterm2"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Available;
