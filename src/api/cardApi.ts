import {baseApi} from "@/api/baseApi";
import {ApiCardData, CardType} from "@/types/CardType";

export type CardApi = {
  access_token: string,
  account_id: number,
  card_data?: ApiCardData,
  card_id?: number,
}

const cardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCards: builder.query({
      query: ({access_token, account_id}: CardApi) => ({
        url: `/api/accounts/${account_id}/cards`,
        method: 'GET',
        headers: {'Authorization': access_token},
      }),
      providesTags: ['cards']
    }),
    getCardById: builder.query<CardType, CardApi>({
      query: ({access_token, account_id, card_id}: CardApi) => ({
        url: `/api/accounts/${account_id}/cards/${card_id}`,
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
      invalidatesTags: ['cards'],
    }),
    deleteCard: builder.mutation({
      query: ({access_token, account_id, card_id}: CardApi) => ({
        url: `/api/accounts/${account_id}/cards/${card_id}`,
        method: 'DELETE',
        headers: {'Authorization': access_token},
      }),
      invalidatesTags: ['cards'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetAllCardsQuery,
  useGetCardByIdQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
} = cardApi
