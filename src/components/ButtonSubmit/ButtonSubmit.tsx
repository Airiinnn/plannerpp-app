import React from "react";

import "./button-submit.scss";
import { ButtonSubmitProps } from "../../types";

function ButtonSubmit({ text }: ButtonSubmitProps) {
  return (
    <button className="button-submit">{text}</button>
  );
}

export default ButtonSubmit;
