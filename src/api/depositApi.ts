import {baseApi} from "@/api/baseApi";
import {DepositType} from "@/types/DepositType";

export type DepositApi = {
  access_token: string,
  account_id: number,
  deposit_data: DepositType,
}

const depositApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDeposit: builder.mutation({
      query: ({access_token, account_id, deposit_data}: DepositApi) => ({
        url: `/api/accounts/${account_id}/deposits`,
        method: 'POST',
        headers: {'Authorization': access_token},
        body: deposit_data,
      }),
      invalidatesTags: ['activity', 'account'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useCreateDepositMutation,
} = depositApi
