import { createSlice } from '@reduxjs/toolkit';
import { getDoneItemsFromLC } from '../../utils/getDoneItemsFromLC';

const getDoneItems = getDoneItemsFromLC();

const initialState = {
  doneItems: getDoneItems.DoneItems,
};

export const doneSlice = createSlice({
  name: 'done',
  initialState,
  reducers: {
    AddDoneTask(state, action) {
      state.doneItems.push(action.payload);
    },
    TaskDone(state, action) {
      state.doneItems = state.doneItems.filter((obj) => obj.id !== action.payload);
    },
    ClearDone(state) {
      state.doneItems = [];
    },
    // AddedDisctiptiom(state, action) {
    //   state.discriptionItems.push(action.payload);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { changeOfTaskArea, AddDoneTask, TaskDone, ClearDone } = doneSlice.actions;

export default doneSlice.reducer;
