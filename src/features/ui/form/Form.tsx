import React from "react";

import "./form.scss";
import { FormProps } from "../../../types";

function Form({ submitHandler, children }: FormProps) {
  return (
    <form
      className="modal__form"
      onSubmit={submitHandler}
    >
      {children}
    </form>
  );
}

export default Form;
