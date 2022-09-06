import { createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';
import { getItemsFromLC } from '../../utils/getItemsFromLC';

let isMounted = false;

const getItems = getItemsFromLC();

const initialState = {
  items: getItems.items,
  temporaryItems: [],
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
    ClearAllTasks(state) {
      state.items = [];
    },
    RemoveTask(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    SearchTask(state, action) {
      if (isMounted === false) {
        state.temporaryItems = state.items;
        isMounted = true;
      }
      state.items = state.temporaryItems.filter((value) =>
        value.taskValueArea.toLowerCase().includes(action.payload),
      );

      if (!action.payload) {
        state.items = state.temporaryItems;
        isMounted = false;
      }
    },
    // AddedDisctiptiom(state, action) {
    //   state.discriptionItems.push(action.payload);
    // },
  },
});

// Action creators are generated for each case reducer function
export const { changeOfTaskArea, AddedTask, TaskDone, ClearAllTasks, RemoveTask, SearchTask } =
  taskBoxSlice.actions;

export default taskBoxSlice.reducer;
