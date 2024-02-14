import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CATEGORIES_ACTION_TYPES, Category, CategoryMap } from './category.types';

export interface CategoriesState {
  categories: Category[];
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;