import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UpdateTaskStatusPayload {
  taskId: string;
  newStatus: string;
}

// Todo: Temp initial state
const initialState = {
  tasks: [
    {
      id: "task-1",
      title: "Homework 1",
      status: "to-do",
      tag: "CS2100",
      endDate: "2024-01-31",
      startDate: "2024-01-15",
      details: "@NUS"
    },
    {
      id: "task-2",
      title: "Homework 2",
      status: "in-progress",
      tag: "CS2100",
      endDate: "2024-01-31",
      startDate: "2024-01-15",
      details: "@NUS"
    },
    {
      id: "task-3",
      title: "Homework 3",
      status: "in-review",
      tag: "CS2100",
      endDate: "2024-01-31",
      startDate: "2024-01-15",
      details: "@NUS"
    },
    {
      id: "task-4",
      title: "Homework 4",
      status: "completed",
      tag: "CS2100",
      endDate: "2024-01-31",
      startDate: "2024-01-15",
      details: "@NUS"
    }
  ]
}

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateTaskStatus: (state, action: PayloadAction<UpdateTaskStatusPayload>) => {
      const { taskId, newStatus } = action.payload;
      const targetTask = state.tasks.find((task) => task.id === taskId);
      targetTask && (targetTask.status = newStatus);
    }
  }
})

export const { updateTaskStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
