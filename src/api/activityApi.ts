import {baseApi} from "@/api/baseApi";
import {Activity} from "@/types/ActivityType";

export type ActivityApi = {
  access_token: string,
  account_id: number,
  transaction_id?: number,
}

const activityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAccountActivity: builder.query({
      query: ({access_token, account_id}: ActivityApi) => ({
        url: `/api/accounts/${account_id}/activity`,
        method: 'GET',
        headers: {'Authorization': access_token},
      }),
      providesTags: ['activity']
    }),
    getAccountActivityById: builder.query<Activity, ActivityApi>({
      query: ({access_token, account_id, transaction_id}) => ({
        url: `/api/accounts/${account_id}/transactions/${transaction_id}`,
        method: 'GET',
        headers: {'Authorization': access_token},
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetAllAccountActivityQuery,
  useGetAccountActivityByIdQuery,
} = activityApi
