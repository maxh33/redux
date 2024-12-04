import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? 'https://fake-api-json-server-5gjb18wdi-maxh33s-projects.vercel.app/produtos'
        : 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Game[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetJogosQuery } = api

export default api
