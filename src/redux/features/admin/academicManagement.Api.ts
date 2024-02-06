import {
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
        console.log(response);
        return {
          data: response?.data,
          meta: response?.meta,
        };
      },
    }),
  }),
});

export const { useCreateAcademicSemesterMutation, useGetAllSemestersQuery } =
  academicManagementApi;
