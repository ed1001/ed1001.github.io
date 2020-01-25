import React from "react";

import Tone from "tone";

import { GridContext } from "../contexts/GridContext";
import Transport from "./Transport";

import "../App";

export default class TransportContainer extends React.Component {
  static contextType = GridContext;

  start = () => {
    Tone.Transport.start();
  };
  pause = () => {
    Tone.Transport.pause();
  };
  stop = () => {
    Tone.Transport.stop();
    this.context.setDivision(-2);
  };
  render() {
    return (
      <div className="transport-container">
        <Transport symbol={"play"} action={this.start} />
        <Transport symbol={"pause"} action={this.pause} />
        <Transport symbol={"stop"} action={this.stop} />
      </div>
    );
  }
}
