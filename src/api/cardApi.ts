import {baseApi} from "@/api/baseApi";

export type CardApi = {
  access_token: string,
  account_id: number,
}

const cardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCards: builder.query({
      query: ({access_token, account_id}: CardApi) => ({
        url: `/api/accounts/${account_id}/cards`,
        method: 'GET',
        headers: {'Authorization': access_token},
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetAllCardsQuery,
} = cardApi
