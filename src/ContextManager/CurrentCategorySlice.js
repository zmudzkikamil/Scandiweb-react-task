import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'all'
};
export const currentCategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategory(state, action) {
      state.category = action.payload;
    }
  }
});

export const { changeCategory } = currentCategorySlice.actions;
