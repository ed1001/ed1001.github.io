import React from "react";

import { GridContext } from "../contexts/GridContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App";

export default class Edit extends React.Component {
  static contextType = GridContext;

  state = {
    active: false
  };

  render() {
    return (
      <div
        className={"edit symbol-container"}
        onClick={() => {
          if (this.props.edit === "clear") {
            this.context.clearAll();
            return;
          }
          this.context.toggleEditMode(this.props.edit);
          this.setState({ active: !this.state.active });
        }}
      >
        <FontAwesomeIcon
          icon={this.props.symbol}
          className={`edit-symbol symbol ${
            this.context.edit === this.props.edit ? "edit-active" : ""
          }`}
        />
      </div>
    );
  }
}
