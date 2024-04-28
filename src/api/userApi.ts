import {instance} from "@/api/baseApi";
import {AccountCtxInfo, AccountInformation, UserInformation} from "@/types/UserType";
import {AxiosError} from "axios";
import {AppDispatch} from "@/lib/store";
import {userSetAccountInfo} from "@/store/authSlice";
import {ApiResponseHandler, ApiStatusResponses} from "@/types/ApiType";

const userResponseHandler: ApiResponseHandler = {
  [ApiStatusResponses.UNAUTHORIZED]: "La sesión ha expirado. Por favor, inicia sesión nuevamente.",
  [ApiStatusResponses.INTERNAL_ERROR]: "Ha ocurrido un error inesperado.  Por favor, inicia sesión nuevamente.",
};

export const getUserData = (access_token: string) => {
  return async (dispatch: AppDispatch)  => {
    try {
      const accountResponse = await instance.get("/account", {
        headers: {
          Authorization: access_token,
        },
      });
      const accountData: AccountInformation = accountResponse.data;
      const userDataResponse = await instance.get(`/users/${accountData.user_id}`, {
        headers: {
          Authorization: access_token,
        },
      })
      const userData: UserInformation = userDataResponse.data;
      const ctxInfo: AccountCtxInfo = {
        account_id: accountData.id,
        user_id: accountData.user_id,
        name: `${userData.firstname} ${userData.lastname}`,
        cvu: accountData.cvu,
        alias: accountData.alias,
        available_amount: accountData.available_amount,
      }
      dispatch(userSetAccountInfo(ctxInfo))
    } catch (error: AxiosError|any) {
      const errorCode: number = error.response.status
      throw new Error(userResponseHandler[errorCode])
    }
  };
};
