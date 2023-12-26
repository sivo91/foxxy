


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the user state (modify this according to your needs)
interface User {
  id: string;
  name: string;
  email: string;
}

// Define the initial state with a type
interface UserState {
  user: User | null;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    userLogOut: (state) => {
      state.user = null;
    },
  },
});

export const { userLogin, userLogOut } = userSlice.actions;
export default userSlice.reducer;
