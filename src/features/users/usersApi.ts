import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../types/users";

const BASE_URL = "https://gorest.co.in/public/v2/";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = process.env.REACT_APP_GOREST_TOKEN;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () =>
        `users?access-token=${process.env.REACT_APP_GOREST_TOKEN}`,
      providesTags: ["Users"],
    }),

    updateUser: builder.mutation<User, User>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: "PUT",
        body: {
          name: user.name,
          email: user.email,
          gender: user.gender,
          status: user.status,
        },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation } = usersApi;
