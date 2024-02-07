import {
  TAdmin,
  TFaculty,
  TQueryParams,
  TReduxResponse,
  TStudent,
} from "../../../types";
import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: TReduxResponse<TStudent>) => {
        console.log(response);
        return {
          data: response?.data,
        };
      },
      invalidatesTags: ["students"],
    }),
    getAllStudents: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TReduxResponse<TStudent[]>) => {
        // console.log(response);
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["students"],
    }),
    createFaculty: builder.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["faculties"],
    }),
    getAllFaculties: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/faculties",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TReduxResponse<TFaculty[]>) => {
        // console.log(response);
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["faculties"],
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["admins"],
    }),
    getAllAdmins: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/admins",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TReduxResponse<TAdmin[]>) => {
        console.log(response);
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["admins"],
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useGetAllStudentsQuery,
  useCreateFacultyMutation,
  useGetAllFacultiesQuery,
  useCreateAdminMutation,
  useGetAllAdminsQuery,
} = userManagementApi;
