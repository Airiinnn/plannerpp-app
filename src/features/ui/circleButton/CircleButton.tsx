import React from "react";

import "./circle-button.scss"
import { CircleButtonProps } from "../../../types";

function CircleButton({ clickHandler, text, invertColors = false }: CircleButtonProps ) {
  return (
    <button
      className={`circle-button ${invertColors ? "circle-button--invert" : "circle-button--normal"}`}
      onClick={clickHandler}
    >
      <span className="circle-button__text">{text}</span>
    </button>
  );
}

export default CircleButton;
// Todo: Fix / find alternative
