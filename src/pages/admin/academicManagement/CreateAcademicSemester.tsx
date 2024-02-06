import { Button, Col, Flex } from "antd";
import ARForm from "../../../components/form/ARForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import ARSelect from "../../../components/form/ARSelect";
import { semesterOptions } from "../../../constants/academicManagement.const";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/academicManagement.schemas";
import { useCreateAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.Api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { TAcademicSemester } from "../../../types";
// import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../../../redux/hooks";
// import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  label: String(currentYear + number),
  value: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addSemester] = useCreateAcademicSemesterMutation();
  // const navigate = useNavigate();
  // const user = useAppSelector(selectCurrentUser);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const name = semesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };

    const toastId = toast.loading("Creating semester...");
    try {
      const res = (await addSemester(
        semesterData
      )) as TResponse<TAcademicSemester>;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success("Semester created successfully!", { id: toastId });
        // navigate(`/${user?.role}/academic-semester`);
      }
    } catch (error) {
      toast.error("Unable to add Semester", { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ARForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <ARSelect label="Name" name="name" options={semesterOptions} />
          <ARSelect label="Year" name="year" options={yearOptions} />
          <ARSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <ARSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </ARForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
