import { baseApi } from '@/shared/api/baseApi';

export const uploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (file) => {
        const formData = new FormData();
        formData.append('image', file);
        return {
          url: '/upload',
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

export const { useUploadImageMutation } = uploadApi;
