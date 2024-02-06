import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TAcademicFaculty, TResponse } from "../../../types";
import { Button, Col, Flex } from "antd";
import ARForm from "../../../components/form/ARForm";
import { zodResolver } from "@hookform/resolvers/zod";
import ARInput from "../../../components/form/ARInput";
import { academicFacultySchema } from "../../../schema/academicManagement.schemas";
import { useCreateAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.Api";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useCreateAcademicFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const academicFacultyData = {
      name: data?.name,
    };

    const toastId = toast.loading("Creating Academic Faculty...");
    try {
      const res = (await addAcademicFaculty(
        academicFacultyData
      )) as TResponse<TAcademicFaculty>;
      // console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success("Academic Faculty created successfully!", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("Unable to add Academic Faculty", { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ARForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicFacultySchema)}
        >
          <ARInput label="Name" name="name" type="text" />
          <Button htmlType="submit">Submit</Button>
        </ARForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
