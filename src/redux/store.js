import { configureStore } from '@reduxjs/toolkit';
import taskBoxSlice from './slices/taskBoxSlice';
import doneSlice from './slices/doneSlice';

export const store = configureStore({
  reducer: { taskBoxSlice, doneSlice },
});
