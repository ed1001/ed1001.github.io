import React from "react";

import Beat from "./Beat";
import "../App";

function BeatContainer(props) {
  return (
    <div className="beat-container">
      <Beat />
      <Beat />
      <Beat />
      <Beat />
    </div>
  );
}

export default BeatContainer;
