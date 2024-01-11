import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../slices/tasksSlice";
import modalReducer from "../slices/modalSlice";
import tagbarSlice from "../slices/tagbarSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    modal: modalReducer,
    tagbar: tagbarSlice
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<typeof store.getState>;
