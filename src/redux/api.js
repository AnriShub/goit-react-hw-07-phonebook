import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64244ee5d6152a4d480bed08.mockapi.io/api/v1/' }),
    tagTypes: ['Contact'],
    endpoints: (builder) => ({
        fetchContacts: builder.query({
            query: () => 'contacts',
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: contact => ({
                url: '/contacts',
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `/contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        })
    }),
})

export const {
    useFetchContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation,
} = contactsApi;