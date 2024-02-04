import { Button, Col, Flex } from "antd";
import ARForm from "../../../components/form/ARForm";
import ARInput from "../../../components/form/ARInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import ARSelect from "../../../components/form/ARSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ARForm onSubmit={onSubmit}>
          <ARInput type="text" label="Semester" name="semester" />
          <ARInput type="text" label="Year" name="year" />
          <ARSelect label="name" />
          <Button htmlType="submit">Submit</Button>
        </ARForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
