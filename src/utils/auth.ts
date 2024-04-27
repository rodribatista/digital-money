import Cookies from "js-cookie";
import {type NextRequest} from "next/server";

export const isAuthenticated = (request: NextRequest): boolean => {
  // [update] deberia chequear si el token es valido
  return request.cookies.has("TOKEN");
}

export const getAccessToken = (): string => {
  const accessToken = Cookies.get("TOKEN");
  if (!accessToken) {
    throw new Error("No access token found");
  }
  return accessToken;
}

export const setAuthentication = (access_token: string) => {
  Cookies.set('TOKEN', access_token, { secure: false })
}

export const removeAuthentication = () => {
  Cookies.remove('TOKEN')
}
