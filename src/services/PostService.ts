import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { IPost } from "../models/IPost"

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000"}),
    endpoints:(build) => ({
        fetchAllPosts: build.query<IPost[],number>({
            query: (limit:number) => ({
                url: `/posts`,
                params:{_limit: limit}
            })
        }),
        createPost: build.mutation<IPost,IPost>({
            query:(post)=>{return {
                url: `/posts`,
                method: 'POST',
                body: post
            }}
        })
    })
})