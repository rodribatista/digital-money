import {baseApi} from "@/api/baseApi";
import {AppDispatch} from "@/lib/store";

import {UserContextInfo, UpdateUserData} from "@/types/UserType";
import {ApiResponseHandler, ApiStatusResponses, ApiErrorResponses} from "@/types/ApiType";

export type UserApi = {
  access_token: string,
  user_id?: number,
  user_data?: UpdateUserData,
}

const userResponseHandler: ApiResponseHandler = {
  [ApiStatusResponses.UNAUTHORIZED]: "La sesión ha expirado. Por favor, inicia sesión nuevamente.",
  [ApiStatusResponses.INTERNAL_ERROR]: "Ha ocurrido un error inesperado.  Por favor, inicia sesión nuevamente.",
};

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAccountData: builder.query({
      query: ({access_token}: UserApi) => ({
        url: `/api/account`,
        method: 'GET',
        headers: {'Authorization': access_token},
      }),
    }),
    getUserData: builder.query({
      query: ({access_token, user_id}: UserApi) => ({
        url: `/api/users/${user_id}`,
        method: 'GET',
        headers: {'Authorization': access_token},
      }),
      providesTags: ['user'],
    }),
    updateUserData: builder.mutation({
      query: ({access_token, user_id, user_data}: UserApi) => ({
        url: `/api/users/${user_id}`,
        method: 'PATCH',
        headers: {'Authorization': access_token},
        body: user_data,
      }),
      invalidatesTags: ['user'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetAccountDataQuery,
  useGetUserDataQuery,
  useUpdateUserDataMutation,
} = userApi

export const getUserInitialData = (access_token: string) => {
  return async (dispatch: AppDispatch): Promise<UserContextInfo> => {
    try {
      const getAccountData = dispatch(userApi.endpoints.getAccountData.initiate({access_token}));
      const {data: accountDataResponse, isError: accountDataIsError, error: accountDataErrorResponse} = await getAccountData;
      if (accountDataIsError) {
        const error = accountDataErrorResponse as ApiErrorResponses;
        throw new Error(error.status.toString());
      }
      const getUserData = dispatch(userApi.endpoints.getUserData.initiate({access_token, user_id: accountDataResponse.user_id}));
      const {data: userDataResponse, isError: userDataIsError, error: userDataErrorResponse} = await getUserData;
      if (userDataIsError) {
        const error = userDataErrorResponse as ApiErrorResponses;
        throw new Error(error.status.toString());
      }
      return {
        account_id: accountDataResponse.id,
        user_id: accountDataResponse.user_id,
        name: `${userDataResponse.firstname} ${userDataResponse.lastname}`,
        cvu: accountDataResponse.cvu,
        alias: accountDataResponse.alias,
        available_amount: accountDataResponse.available_amount,
      };
    } catch (error: any) {
      const errorCode: number = Number(error.message);
      throw new Error(userResponseHandler[errorCode]);
    }
  };
};
