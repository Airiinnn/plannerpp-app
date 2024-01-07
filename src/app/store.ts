import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "../features/ui/modal/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<typeof store.getState>;
