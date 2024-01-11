import React from "react";

import "./input-title.scss";
import {InputProps} from "../../../../types";

function InputTitle({ name, defaultValue }: InputProps) {
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
