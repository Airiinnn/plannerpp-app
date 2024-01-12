import React from "react";

import "./view.scss";
import { ViewProps } from "../../types";

import Tagbar from "../tagbar/Tagbar";

function View({ children }: ViewProps) {
  return (
    <div className="view">
      <Tagbar />

      {children}
    </div>
  );
}

export default View;
