import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addActionToHistory(state, action) {
      state.history = [...state.history, action.payload];
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export default historySlice;
export const { addActionToHistory, clearHistory } = historySlice.actions;
