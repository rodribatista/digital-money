import {baseApi} from "@/api/baseApi";
import {ApiCardData} from "@/types/CardType";

export type CardApi = {
  access_token: string,
  account_id: number,
  card_data?: ApiCardData,
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
    createCard: builder.mutation({
      query: ({access_token, account_id, card_data}: CardApi) => ({
        url: `/api/accounts/${account_id}/cards`,
        method: 'POST',
        headers: {'Authorization': access_token},
        body: card_data,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetAllCardsQuery,
  useCreateCardMutation,
} = cardApi
