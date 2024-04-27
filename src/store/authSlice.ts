import {createSlice} from "@reduxjs/toolkit";

import type {PayloadAction} from "@reduxjs/toolkit";
import {AccountCtxInfo} from "@/types/UserType";

import {removeAuthentication, setAuthentication} from "@/utils/auth";

export interface IAuthState {
  accessToken: string | null;
  accountInfo: AccountCtxInfo;
}

const initialState: IAuthState = {
  accessToken: null,
  accountInfo: {
    account_id: 0,
    user_id: 0,
    name: "",
    cvu: "",
    alias: "",
    available_amount: 0,
  },
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
    userSetAccountInfo: (state, action: PayloadAction<AccountCtxInfo>) => {
      state.accountInfo = action.payload;
    },
  }
});

export const authReducer = authSlice.reducer;
export const {
  userLoggedIn,
  userLoggedOut,
  userSetToken,
  userSetAccountInfo,
} = authSlice.actions;
