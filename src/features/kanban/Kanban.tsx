import React from "react";

import "./kanban.scss";
import KanbanColumn from "./kanbanColumn/KanbanColumn";
import Tagbar from "./tagbar/Tagbar";
import Modal from "../ui/modal/Modal";

import { useAppSelector } from "../../app/hooks";

function Kanban() {
  const modalIsShown = useAppSelector((state) => state.modal.isShown);

  return (
    <div className="kanban">
      {modalIsShown ? <Modal /> : null}

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
