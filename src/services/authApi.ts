import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://testtourapp.herokuapp.com"
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: {email:string; password:string}) => {
                return{
                url: "/signin",
                method:"post",
                body,    
                }
                
            }
        })
    })
})

export const {useLoginUserMutation} = authApi;