import React from "react";

import "./kanban.scss";
import KanbanColumn from "./kanbanColumn/KanbanColumn";
import Tagbar from "./tagbar/Tagbar";
import Modal from "../ui/modal/Modal";

import { useAppSelector } from "../../app/hooks";
import KanbanCard from "./kanbanCard/KanbanCard";

function Kanban() {
  const modalIsShown = useAppSelector((state) => state.modal.isShown);

  return (
    <div className="kanban">
      {modalIsShown ? <Modal /> : null}

      <Tagbar tags={["CS2100", "CS2030S", "CS2040S"]} />

      <div className="kanban-board">
        <KanbanColumn columnHeader="To Do">
          <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
        </KanbanColumn>

        <KanbanColumn columnHeader="In Progress">
          <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
          <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
        </KanbanColumn>

        <KanbanColumn columnHeader="Pending Review">
          <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
          <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
          <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
        </KanbanColumn>

        <KanbanColumn columnHeader="Completed">
          <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
          <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
          <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
          <KanbanCard title="Dummy thing" tag="CS2100" endDate="31-01-2024"/>
        </KanbanColumn>
      </div>
    </div>
  );
}

export default Kanban;
