import {baseApi} from "@/api/baseApi";
import {TransferenceType} from "@/types/TransferenceType";

export type TransferenceApi = {
  access_token: string,
  account_id: number,
  transference_data: TransferenceType,
}

const transferenceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTransference: builder.mutation({
      query: ({access_token, account_id, transference_data}: TransferenceApi) => ({
        url: `/api/accounts/${account_id}/transferences`,
        method: 'POST',
        headers: {'Authorization': access_token},
        body: transference_data,
      }),
      invalidatesTags: ['account', 'activity'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateTransferenceMutation,
} = transferenceApi
