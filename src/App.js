import React from "react";
import ReactDOM from "react-dom";

import GridContextProvider from "./contexts/GridContext";
import "./App.css";

import Box from "./components/Box";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faStop,
  faPause,
  faEraser,
  faPencilAlt,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faStop, faPause, faEraser, faPencilAlt, faTrashAlt);

export default function App() {
  return (
    <GridContextProvider>
      <Box />
    </GridContextProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
