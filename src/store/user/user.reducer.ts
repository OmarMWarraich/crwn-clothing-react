import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  currentUser: any; // Change 'any' to the actual type of currentUser
  test: { a: number };
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  test: { a: 1 },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action: PayloadAction<any>) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
