import React, { Component } from "react";
import { GridContext } from "../contexts/GridContext";

import Note from "./Note";

import "../App";

class GridLine extends Component {
  static contextType = GridContext;

  instrPlay = instrument => {
    this.context.playNote(instrument);
    const el = this.refs.instrName;
    el.classList.remove("instr-name-active");
    void el.offsetWidth;
    el.classList.add("instr-name-active");
  };

  render() {
    return (
      <div className="grid-line">
        <div
          className={`instr-name`}
          id={this.props.instrument}
          ref="instrName"
          onClick={() => this.instrPlay(this.props.instrument)}
        >
          {this.context.instrumentLabels[this.props.instrument]}
        </div>
        <div className="notes">
          {this.context.instruments[this.props.instrument].map(
            (note, index) => (
              <Note
                class={`note ${
                  note && index === this.context.currentDivision
                    ? "note-playing"
                    : note
                    ? "note-active"
                    : ""
                }`}
                note={index}
                instrument={this.props.instrument}
                setGrid={this.context.setGrid}
                key={index}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

export default GridLine;
