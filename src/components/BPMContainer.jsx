import React from "react";

import { GridContext } from "../contexts/GridContext";
import "../App";

export default class BPMContainer extends React.Component {
  static contextType = GridContext;

  state = {
    interval: 200,
    increment: 1,
    stop: false
  };

  increaseBpm = (interval, increment) => {
    if (!this.state.stop) {
      this.context.setBpm(this.context.bpm + increment);
    }
    if (interval > 20) interval -= 10;

    window.addEventListener("mouseup", () => {
      this.setState({ stop: true });
    });

    if (!this.state.stop) {
      setTimeout(() => {
        this.increaseBpm(interval, increment);
      }, interval);
    }
  };

  render() {
    return (
      <div className="bpm-container">
        <p id="bpm-desc">BPM</p>
        <div id="bpm-text">
          <p>{this.context.bpm}</p>
        </div>
        <div id="arrows">
          <p
            className="arrow"
            onMouseDown={() => {
              this.setState({ stop: false }, () => {
                this.increaseBpm(200, 1);
              });
            }}
          >
            ▲
          </p>
          <p
            className="arrow"
            onMouseDown={() => {
              this.setState({ stop: false }, () => {
                this.increaseBpm(200, -1);
              });
            }}
          >
            ▼
          </p>
        </div>
      </div>
    );
  }
}
