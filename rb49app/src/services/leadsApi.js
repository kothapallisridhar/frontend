// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const leadsApi = createApi({
  reducerPath: "leadsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/api/leads" }),
  endpoints: (builder) => ({
    getAllLeads: builder.query({
      query: () => `/`,
    }),
    getLeadDetailsById: builder.query({
      query: (id) => `/${id}`,
    }),
    addNewLead: builder.mutation({
      query: (lead) => ({
        url: "/",
        method: "POST",
        body: lead,
      }),
    }),
    deleteLead: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    updateLead: builder.mutation({
      query: (lead) => ({
        url: `/${lead["_id"]}`,
        method: "PUT",
        body: lead,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllLeadsQuery,
  useLazyGetAllLeadsQuery,
  useAddNewLeadMutation,
  useDeleteLeadMutation,
  useGetLeadDetailsByIdQuery,
  useLazyGetLeadDetailsByIdQuery,
  useUpdateLeadMutation,
} = leadsApi;
