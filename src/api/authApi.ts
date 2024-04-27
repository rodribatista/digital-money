import {instance} from './baseApi';
import {userLoggedIn} from "@/store/authSlice";

import {LoginCredentials, SignupData, AuthResponses, LoginResponse, SignupResponse} from "@/types/AuthType";
import {AppDispatch} from "@/lib/store";
import {AxiosError} from "axios";

interface AuthResponseHandler {
  [key: string]: string;
}

const authResponseHandler: AuthResponseHandler = {
  [AuthResponses.BAD_CREDENTIALS]: "Las credenciales son inválidas. Por favor, inténtalo de nuevo.",
  [AuthResponses.USER_NOT_FOUND]: "Usuario no encontrado. Por favor, inténtalo de nuevo.",
  [AuthResponses.USER_ALREADY_EXISTS]: "El usuario ya existe. Puedes intentar iniciar sesión.",
  [AuthResponses.INTERNAL_ERROR]: "Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.",
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

export const authSignup = async (signupData: SignupData) => {
  try {
    const {data} = await instance.post("/users", signupData)
    const response: SignupResponse = data
    return response.email
  } catch (error: AxiosError|any) {
    const errorCode: number = error.response.status
    throw new Error(authResponseHandler[errorCode])
  }
};
