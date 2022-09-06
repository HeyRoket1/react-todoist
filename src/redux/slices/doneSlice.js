import { createSlice } from '@reduxjs/toolkit';
import { getDoneItemsFromLC } from '../../utils/getDoneItemsFromLC';

let isMounted = false;

const getDoneItems = getDoneItemsFromLC();

const initialState = {
  doneItems: getDoneItems.DoneItems,
  temporaryDoneItems: [],
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
    SearchDone(state, action) {
      if (isMounted == false) {
        state.temporaryDoneItems = state.doneItems;
        isMounted = true;
      }
      state.doneItems = state.temporaryDoneItems.filter((state) =>
        state.text.toLowerCase().includes(action.payload),
      );

      if (!action.payload) {
        state.doneItems = state.temporaryDoneItems;
        isMounted = false;
      }
    },
    // AddedDisctiptiom(state, action) {
    //   state.discriptionItems.push(action.payload);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { changeOfTaskArea, AddDoneTask, TaskDone, ClearDone, SearchDone } = doneSlice.actions;

export default doneSlice.reducer;
