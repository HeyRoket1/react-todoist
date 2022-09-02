import { createSlice } from '@reduxjs/toolkit';
import { getItemsFromLC } from '../../utils/getItemsFromLC';

const getItems = getItemsFromLC();

const initialState = {
  items: getItems.items,
};

export const taskBoxSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    AddedTask(state, action) {
      state.items.push(action.payload);
    },
    TaskDone(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    // AddedDisctiptiom(state, action) {
    //   state.discriptionItems.push(action.payload);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { changeOfTaskArea, AddedTask, TaskDone } = taskBoxSlice.actions;

export default taskBoxSlice.reducer;
