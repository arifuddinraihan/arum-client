import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
      transformResponse: (response) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useCreateAcademicSemesterMutation, useGetAllSemestersQuery } =
  academicManagementApi;
