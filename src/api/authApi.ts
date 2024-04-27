import {instance} from './baseApi';
import {userLoggedIn} from "@/store/authSlice";

import {LoginResponse, LoginCredentials, AuthLoginResponses} from "@/types/AuthType";
import {AppDispatch} from "@/lib/store";
import {AxiosError} from "axios";

interface AuthResponseHandler {
  [key: string]: string;
}

const authResponseHandler: AuthResponseHandler = {
  [AuthLoginResponses.BAD_CREDENTIALS]: "Las credenciales son inválidas. Por favor, inténtalo de nuevo.",
  [AuthLoginResponses.USER_NOT_FOUND]: "Usuario no encontrado. Por favor, inténtalo de nuevo.",
  [AuthLoginResponses.INTERNAL_ERROR]: "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.",
};

export const authLogin = (loginData: LoginCredentials) => {
  return async (dispatch: AppDispatch)  => {
    try {
      const {data} = await instance.post("/login", loginData)
      const response: LoginResponse = data
      dispatch(userLoggedIn(response.token))
    } catch (error: AxiosError|any) {
      const errorCode: number = error.response.status
      throw new Error(authResponseHandler[errorCode])
    }
  };
};
