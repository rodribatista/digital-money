import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IAuthState {
  isLogged: boolean,
  accessToken: string | null;
}

const initialState: IAuthState = {
  isLogged: false,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<string>) => {
      state.isLogged = true;
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    userLoggedOut: (state) => {
      state.isLogged = false;
      state.accessToken = null;
      localStorage.removeItem("accessToken")
    }
  },
});

export const authReducer = authSlice.reducer;
export const {
  userLoggedIn,
  userLoggedOut
} = authSlice.actions;
