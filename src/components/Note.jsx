import React, { useContext } from "react";

import { GridContext } from "../contexts/GridContext";
import "../App";

const Note = props => {
  const { mouseDown, edit, editGrid } = useContext(GridContext);
  return (
    <div
      className={`${props.class} ${edit ? "mouse-" + edit : ""}`}
      onMouseDown={() => {
        props.setGrid(props.note, props.instrument, edit);
      }}
      onMouseEnter={() => {
        if (mouseDown && edit) {
          editGrid(edit, props.note, props.instrument);
        }
      }}
    ></div>
  );
};

export default Note;
