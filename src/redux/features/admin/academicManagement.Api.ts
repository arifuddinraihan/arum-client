import {
  TAcademicDepartment,
  TAcademicFaculty,
  TAcademicSemester,
  TQueryParams,
  TReduxResponse,
} from "../../../types";
import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["academicSemesters"],
    }),
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TReduxResponse<TAcademicSemester[]>) => {
        // console.log(response);
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["academicSemesters"],
    }),
    createAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["academicFaculties"],
    }),
    getAllAcademicFaculties: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-faculties",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TReduxResponse<TAcademicFaculty[]>) => {
        // console.log(response);
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["academicFaculties"],
    }),
    createAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["academicDepartments"],
    }),
    getAllAcademicDepartments: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-departments",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TReduxResponse<TAcademicDepartment[]>) => {
        console.log(response);
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
      providesTags: ["academicDepartments"],
    }),
  }),
});

export const {
  useCreateAcademicSemesterMutation,
  useGetAllSemestersQuery,
  useCreateAcademicFacultyMutation,
  useGetAllAcademicFacultiesQuery,
  useCreateAcademicDepartmentMutation,
  useGetAllAcademicDepartmentsQuery,
} = academicManagementApi;
