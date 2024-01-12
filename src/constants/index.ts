import { Column } from "../types";

export const KANBAN_COLUMNS: Column[] = [
  {
    columnId: "to-do",
    columnTitle: "To Do"
  },
  {
    columnId: "in-progress",
    columnTitle: "In Progress"
  },
  {
    columnId: "in-review",
    columnTitle: "In review"
  },
  {
    columnId: "completed",
    columnTitle: "Completed"
  },
]
