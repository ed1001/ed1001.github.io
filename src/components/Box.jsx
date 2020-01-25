import React from "react";
import { GridContext } from "../contexts/GridContext";

import GridContainer from "./GridContainer";
import TransportContainer from "./TransportContainer";
import BPMContainer from "./BPMContainer";
import EditContainer from "./EditContainer";

import "../App";

export default class Box extends React.Component {
  static contextType = GridContext;

  render() {
    return (
      <div className="box">
        <div className="upper-container">
          <TransportContainer />
          <EditContainer />
          <BPMContainer />
        </div>
        <GridContainer setGrid={this.setGrid} />
      </div>
    );
  }
}
