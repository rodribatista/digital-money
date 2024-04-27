import {baseApi} from "@/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    accountData: builder.query({
      query: (access_token) => ({
        url: '/account',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }),
    }),
    userData: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
  overrideExisting: false,
})

export const {
  useAccountDataQuery,
  useUserDataQuery,
} = userApi
