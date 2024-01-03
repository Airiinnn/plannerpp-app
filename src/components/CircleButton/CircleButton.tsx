import React from "react";

import "./circle-button.scss"
import { CircleButtonProps } from "../../types";

function CircleButton({ clickHandler, text }: CircleButtonProps ) {
  return (
    <button
      className="circle-button"
      onClick={clickHandler}
    >
      <span className="circle-button__text">{text}</span>
    </button>
  );
}

export default CircleButton;
