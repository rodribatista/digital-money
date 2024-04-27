import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import {UserInformation} from "@/types/AuthType";

import {removeAuthentication, setAuthentication} from "@/utils/auth";

export interface IAuthState {
  accessToken: string | null;
  userInfo: UserInformation | null;
}

const initialState: IAuthState = {
  accessToken: null,
  userInfo: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<string>) => {
      setAuthentication(action.payload)
    },
    userLoggedOut: (state) => {
      state.accessToken = null;
      removeAuthentication()
    },
    userSetToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    userSetInfo: (state, action: PayloadAction<UserInformation>) => {
      state.userInfo = action.payload;
    },
  }
});

export const authReducer = authSlice.reducer;
export const {
  userLoggedIn,
  userLoggedOut,
  userSetToken,
  userSetInfo,
} = authSlice.actions;
