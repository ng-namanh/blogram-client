import { baseApi } from "@/shared/api/baseApi";
import { RequestCreatePostBody, ResponseCreatePost } from "./types";
import { Post } from "../model/types";

export const postApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<ResponseCreatePost, RequestCreatePostBody>({
      query: (body) => ({
        url: "post/new",
        method: "post",
        body,
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPosts: builder.query<Post[], any>({
      query: (params) => ({
        url: "post",
        method: "get",
        params,
      }),
    }),
  }),
});

export const { useCreatePostMutation, useGetPostsQuery } = postApiSlice;
