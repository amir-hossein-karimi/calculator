import { combineReducers } from '@reduxjs/toolkit';

import historySlice from './history/reducer';

const rootReducer = combineReducers({
  history: historySlice.reducer,
});

export default rootReducer;
