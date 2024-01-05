import React from "react";

import "./input-title.scss";
import {InputTitleProps} from "../../types";

function InputTitle({ name, defaultValue }: InputTitleProps) {
  return (
    <input
      className="input-title"
      type="text"
      name={name}
      defaultValue={defaultValue}
    />
  );
}

export default InputTitle;
