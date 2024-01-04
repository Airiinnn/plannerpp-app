import React from "react";

import "./kanban.scss";
import KanbanColumn from "../../components/KanbanColumn/KanbanColumn";
import Tagbar from "../../components/Tagbar/Tagbar";

function Kanban() {
  return (
    <div className="kanban">
      <Tagbar tags={["CS2100", "CS2030S", "CS2040S"]} />

      <div className="kanban-board">
        <KanbanColumn columnHeader="To Do" />
        <KanbanColumn columnHeader="In Progress" />
        <KanbanColumn columnHeader="Pending Review" />
        <KanbanColumn columnHeader="Completed" />
      </div>
    </div>
  );
}

export default Kanban;
