import React from "react";

import "./kanban.scss";
import KanbanColumn from "../../components/KanbanColumn/KanbanColumn";

function Kanban() {
  return (
    <div className="kanban-board">
      <KanbanColumn columnHeader="To Do" />
      <KanbanColumn columnHeader="In Progress" />
      <KanbanColumn columnHeader="Pending Review" />
      <KanbanColumn columnHeader="Completed" />
    </div>
  );
}

export default Kanban;
