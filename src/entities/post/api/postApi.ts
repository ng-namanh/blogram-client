/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from '@/shared/api/baseApi'
import { RequestCreatePostBody, ResponseCreatePost } from './types'

export const postApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<ResponseCreatePost, RequestCreatePostBody>({
      query: (body) => ({
        url: 'post/new',
        method: 'post',
        body
      })
    })
  })
})

export const { useCreatePostMutation } = postApiSlice
