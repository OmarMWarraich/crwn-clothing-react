import { createSelector } from 'reselect';
import { CategoryMap, Category } from './category.types';

type CategoriesState = {
    categories: Category[];
    }

const selectCategoryReducer = (state: { categories: CategoriesState }): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc: CategoryMap, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);