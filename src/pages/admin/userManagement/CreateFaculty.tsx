const CreateFaculty = () => {
  return (
    <div>
      <h1>This is CreateFaculty component</h1>
    </div>
  );
};

export default CreateFaculty;

// const CreateFaculty = () => {

//   const { data: sData, isLoading: sIsLoading } =
//     useGetAllSemestersQuery(undefined);

//   const { data: dData, isLoading: dIsLoading } =
//     useGetAllAcademicDepartmentsQuery(undefined, { skip: sIsLoading });

//   const semesterOptions = sData?.data?.map((item) => ({
//     value: item._id,
//     label: `${item.name} ${item.year}`,
//   }));

//   const departmentOptions = dData?.data?.map((item) => ({
//     value: item._id,
//     label: item.name,
//   }));

//   const [addStudent] = useCreateStudentMutation();

//   // console.log(resData);

//   const handleStudentData: SubmitHandler<FieldValues> = async (data) => {
//     const studentData = {
//       password: "student123",
//       student: data,
//     };

//     const student = new FormData();

//     student.append("file", data.profileImg);
//     student.append("data", JSON.stringify(studentData));

//     // console.log(Object.fromEntries(student));

//     // addStudent(student);

//     const toastId = toast.loading("Creating student...");
//     try {
//       const res = (await addStudent(student)) as TResponse<TCreatedStudentRes>;
//       console.log(res);
//       if (res?.error) {
//         toast.error(res?.error?.data?.message, { id: toastId });
//       } else {
//         toast.success(`Student: ${res?.data?.data?.id} created successfully!`, {
//           id: toastId,
//         });
//       }
//     } catch (error) {
//       toast.error("Unable to add Student", { id: toastId });
//     }
//   };
//   return (
//     <Row>
//       <Col span={24}>
//         <ARForm
//           onSubmit={handleStudentData}
//           defaultValues={studentDefaultValues}
//         >
//           <Divider>Personal Info</Divider>
//           <Row gutter={8}>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput type="text" name="name.firstName" label="First Name" />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput type="text" name="name.middleName" label="Middle Name" />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput type="text" name="name.lastName" label="Last Name" />
//             </Col>
//           </Row>
//           <Row gutter={8}>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARSelect options={genderOptions} name="gender" label="Gender" />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARDatePicker name="dateOfBirth" label="Date Of Birth" />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARSelect
//                 options={bloodGroupOptions}
//                 name="bloogGroup"
//                 label="Blood Group"
//               />
//             </Col>
//             <Col>
//               <Controller
//                 name="profileImg"
//                 render={({ field: { onChange, value, ...field } }) => (
//                   <Form.Item label="Upload Picture">
//                     <Input
//                       {...field}
//                       type="file"
//                       value={value?.fileName}
//                       onChange={(e) => onChange(e.target.files?.[0])}
//                     />
//                   </Form.Item>
//                 )}
//               />
//             </Col>
//           </Row>
//           <Divider>Contact Info.</Divider>
//           <Row gutter={8}>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput type="text" name="email" label="Email" />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput type="text" name="contactNo" label="Contact" />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="emergencyContactNo"
//                 label="Emergency Contact"
//               />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="presentAddress"
//                 label="Present Address"
//               />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="permanentAddress"
//                 label="Permanent Address"
//               />
//             </Col>
//           </Row>
//           <Divider>Guardian</Divider>
//           <Row gutter={8}>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="guardian.fatherName"
//                 label="Father Name"
//               />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="guardian.fatherOccupation"
//                 label="Father Occupation"
//               />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="guardian.fatherContactNo"
//                 label="Father ContactNo"
//               />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="guardian.motherName"
//                 label="Mother Name"
//               />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="guardian.motherOccupation"
//                 label="Mother Occupation"
//               />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="guardian.motherContactNo"
//                 label="Mother ContactNo"
//               />
//             </Col>
//           </Row>
//           <Divider>Local Guardian</Divider>
//           <Row gutter={8}>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput type="text" name="localGuardian.name" label="Name" />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="localGuardian.occupation"
//                 label="Occupation"
//               />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="localGuardian.contactNo"
//                 label="Contact No."
//               />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARInput
//                 type="text"
//                 name="localGuardian.address"
//                 label="Address"
//               />
//             </Col>
//           </Row>
//           <Divider>Academic Info.</Divider>
//           <Row gutter={8}>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARSelect
//                 options={semesterOptions}
//                 disabled={sIsLoading}
//                 name="admissionSemester"
//                 label="Admission Semester"
//               />
//             </Col>
//             <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
//               <ARSelect
//                 options={departmentOptions}
//                 disabled={dIsLoading}
//                 name="academicDepartment"
//                 label="Admission Department"
//               />
//             </Col>
//           </Row>

//           <Button htmlType="submit">Submit</Button>
//         </ARForm>
//       </Col>
//     </Row>
//   );
// };

// export default CreateFaculty;
