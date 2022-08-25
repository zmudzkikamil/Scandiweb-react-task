import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('currency')) || {
  label: 'USD',
  symbol: '$'
};
export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    changeCurrency(state, action) {
      state.label = action.payload.label;
      state.symbol = action.payload.symbol;
    }
  }
});

export const { changeCurrency } = currencySlice.actions;
