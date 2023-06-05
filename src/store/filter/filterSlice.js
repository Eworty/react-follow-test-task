import { createSlice } from '@reduxjs/toolkit';
import { FILTER } from 'common/constants';

const filterSlice = createSlice({
  name: 'filter',
  initialState: FILTER.ALL,
  reducers: {
    setFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
