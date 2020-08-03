import React from "react";
import "./Controls.css";
import {Color} from "./Color";
import {Eraser} from "./Eraser";

export const Controls = (props) => {
  return <div className="controls">
      <Color handleColor={props.handleColor} />
      <Eraser handleColor={props.handleColor} />
  </div>;
}
