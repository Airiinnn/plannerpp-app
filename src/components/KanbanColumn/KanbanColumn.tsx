import React from "react";

import "./kanban-column.scss";
import { KanbanColumnProps } from "../../types";

function KanbanColumn({ columnHeader }: KanbanColumnProps) {
  return (
    <div className="kanban-column">
      <h2 className="kanban-column__header">{columnHeader}</h2>
      <div className="kanban-column__content">
        <h2>Dummy thing</h2>
        <h2>Dummy thing</h2>
        <h2>Dummy thing</h2>
      </div>
    </div>
  );
}

export default KanbanColumn;
