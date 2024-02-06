export type TAcademicSemester = {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TAcademicFaculty = {
  name: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TAcademicFacultySchema = {
  name: string;
};
