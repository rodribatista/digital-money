import {baseApi} from "@/api/baseApi";
import {Service} from "@/types/ServiceType";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: '/service',
        method: 'GET',
      }),
    }),
    getServicesByName: builder.query({
      query: (query?: string) => ({
        url: `/service/search/${query}`,
        method: 'GET',
      }),
    }),
    getServiceById: builder.query<Service, number>({
      query: (id: number) => ({
        url: `/service/${id}`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetAllServicesQuery,
  useGetServicesByNameQuery,
  useGetServiceByIdQuery,
} = serviceApi
