import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  useCreateAcademicDepartmentMutation,
  useGetAllAcademicFacultiesQuery,
} from "../../../redux/features/admin/academicManagement.Api";
import { toast } from "sonner";
import { TAcademicDepartment, TResponse } from "../../../types";
import { Button, Col, Flex } from "antd";
import ARForm from "../../../components/form/ARForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicDepartmentSchema } from "../../../schema/academicManagement.schemas";
import ARInput from "../../../components/form/ARInput";
import ARSelect from "../../../components/form/ARSelect";

const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useCreateAcademicDepartmentMutation();

  // Getting academic faculty list and making it as options for academicFaculty select options
  const { data: academicFacultiesData } =
    useGetAllAcademicFacultiesQuery(undefined);

  const academicFacultyOptions = academicFacultiesData?.data?.map((item) => {
    return {
      value: item._id,
      label: item.name,
    };
  });

  // console.log(academicFacultyOptions);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const academicDepartmentData = {
      name: data?.name,
      academicFaculty: data?.academicFaculty,
    };

    // console.log(academicDepartmentData);

    const toastId = toast.loading("Creating Academic Department...");
    try {
      const res = (await addAcademicDepartment(
        academicDepartmentData
      )) as TResponse<TAcademicDepartment>;
      // console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success("Academic Department created successfully!", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("Unable to add Academic Department", { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ARForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicDepartmentSchema)}
        >
          <ARInput label="Name" name="name" type="text" />
          <ARSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={academicFacultyOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </ARForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
