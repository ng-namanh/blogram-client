import { baseApi } from '@/shared/api/baseApi';
import { RequestCreatePostBody, ResponseCreatePost } from './types';
import { Post } from '../model/types';
import { POST_TAG } from '@/shared/api/tags';

export const postApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPost: builder.mutation<ResponseCreatePost, RequestCreatePostBody>({
      query: (body) => ({
        url: 'post/new',
        method: 'post',
        body,
      }),
      invalidatesTags: [POST_TAG],
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPosts: builder.query<Post[], any>({
      query: () => ({
        url: 'post',
        method: 'get',
      }),
      providesTags: [POST_TAG],
    }),

    likePost: builder.mutation<void, { postId: number }>({
      query: ({ postId }) => ({
        url: `post/${postId}/like`,
        method: 'post',
      }),
      invalidatesTags: [POST_TAG],
    }),
  }),
});

export const { useCreatePostMutation, useGetPostsQuery, useLikePostMutation } =
  postApiSlice;
