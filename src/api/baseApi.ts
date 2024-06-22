import axios from "axios";
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://digitalmoney.digitalhouse.com/',
  }),
  tagTypes: ['cards', 'user', 'activity', 'account'],
  endpoints: () => ({}),
});

export const instance = axios.create({
  baseURL: 'https://digitalmoney.digitalhouse.com/api',
  timeout: 5000,
});
