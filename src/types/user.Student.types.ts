export type TStudent = {
  id: string;
  user: string;
  name: Name;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg: string;
  admissionSemester: string;
  isDeleted: boolean;
  academicDepartment: string;
  academicFaculty: string;
  _id: string;
  __v: number;
  fullName: string;
};

export type TCreatedStudentRes = {
  data: TStudent;
};

type Name = {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
};

type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  _id: string;
};

type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
  _id: string;
};
