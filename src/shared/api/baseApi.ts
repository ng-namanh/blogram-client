import { createApi } from "@reduxjs/toolkit/query/react";
import { SESSION_TAG } from "./tags";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const baseApi = createApi({
  tagTypes: [SESSION_TAG, "Post"],
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
