import React, {ReactNode} from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

import "./kanban.scss";
import { KANBAN_COLUMNS } from "../../constants";
import {Task, Tag, Column} from "../../types";

import KanbanColumn from "./kanbanColumn/KanbanColumn";
import Tagbar from "../tagbar/Tagbar";
import KanbanCard from "./kanbanCard/KanbanCard";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { updateTaskStatus } from "../../slices/tasksSlice";

function Kanban() {
  const dispatch = useAppDispatch();

  const tags: Tag[] = useAppSelector((state) => state.tagbar.tags);
  const tasks: Task[] = useAppSelector((state) => state.tasks.tasks);

  const onDragEnd = (result: DropResult) => {
    const { source, destination, draggableId } = result;

    // Dropped outside of Droppable
    if (!destination) {
      return;
    }

    // Destination same as source
    if (destination.droppableId === source.droppableId) {
      return;
    }

    dispatch(updateTaskStatus({taskId: draggableId, newStatus: destination.droppableId}));
  }

  const filterTasksByColumnAndTag = (task: Task, columnId: string, tags: Tag[]): boolean => {
    return task.status === columnId && tags.find((tag) => tag.title === task.tag && tag.selected) !== undefined
  };

  const renderDroppableColumn = (tasks: Task[], column: Column, tags: Tag[]): ReactNode => (
    <Droppable key={column.columnId} droppableId={column.columnId}>
      {(provided) => (
        <KanbanColumn
          columnHeader={column.columnTitle}
          provided={provided}
        >
          {tasks
            .filter((task) => filterTasksByColumnAndTag(task, column.columnId, tags))
            .map(renderDraggableTask)}
        </KanbanColumn>
      )}
    </Droppable>
  );

  const renderDraggableTask = (task: Task, index: number): ReactNode => (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <KanbanCard
          id={task.id}
          title={task.title}
          tag={task.tag}
          endDate={task.endDate}
          provided={provided}
        />
      )}
    </Draggable>
  );

  return (
    <div className="kanban">
      <Tagbar />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {KANBAN_COLUMNS.map((column) => renderDroppableColumn(tasks, column, tags))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Kanban;
