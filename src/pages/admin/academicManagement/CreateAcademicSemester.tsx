import { Button } from "antd";
import ARForm from "../../../components/form/ARForm";
import ARInput from "../../../components/form/ARInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <ARForm onSubmit={onSubmit}>
      <ARInput type="text" label="Something" name="Something" />
      <Button htmlType="submit">Submit</Button>
    </ARForm>
  );
};

export default CreateAcademicSemester;
