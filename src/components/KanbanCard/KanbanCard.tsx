import React from "react";

import "./kanban-card.scss";
import { KanbanCardProps } from "../../types";

function KanbanCard({ title, tag, endDate, startDate = null }: KanbanCardProps) {
  return (
    <div className="kanban-card">
      <h2 className="kanban-card__title">{title}</h2>
      <h3 className="kanban-card__tag">{tag}</h3>
      <h3 className="kanban-card__date">Deadline: <span className="kanban-card__date--bold">{endDate}</span></h3>
    </div>
  );
}

export default KanbanCard;
