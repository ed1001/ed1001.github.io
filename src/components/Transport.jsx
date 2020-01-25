import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../App";

export default class Transport extends React.Component {
  render() {
    return (
      <div
        className="transport symbol-container"
        onClick={() => this.props.action()}
      >
        <FontAwesomeIcon
          icon={this.props.symbol}
          className="transport-symbol symbol"
        />
      </div>
    );
  }
}
