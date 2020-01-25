import React, { useContext } from "react";

import { GridContext } from "../contexts/GridContext";

import GridLine from "./GridLine";
import BeatContainer from "./BeatContainer";
import SubDivisionContainer from "./SubDivisionContainer";
import "../App";

function GridContainer() {
  const { instrumentLabels } = useContext(GridContext);
  return (
    <div className="grid-container">
      <BeatContainer />
      <SubDivisionContainer />
      {Object.keys(instrumentLabels).map((instrument, index) => (
        <GridLine instrument={instrument} key={index} />
      ))}
    </div>
  );
}

export default GridContainer;
