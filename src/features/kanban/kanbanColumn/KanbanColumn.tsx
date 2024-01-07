import React from "react";

import "./kanban-column.scss";
import { KanbanColumnProps } from "../../../types";
import KanbanCard from "../kanbanCard/KanbanCard";
import CircleButton from "../../ui/circleButton/CircleButton";

function KanbanColumn({ columnHeader }: KanbanColumnProps) {
  return (
    <div className="kanban-column">
      <h2 className="kanban-column__header">{columnHeader}</h2>

      <div className="kanban-column__content">
        <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
        <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
        <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
        <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>

        <CircleButton clickHandler={() => alert("+")} text="+" />
      </div>
    </div>
  );
}

export default KanbanColumn;
