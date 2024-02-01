import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./Reducers/taskSlice";
export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});
