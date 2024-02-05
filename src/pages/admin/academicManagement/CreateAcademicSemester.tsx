import { Button, Col, Flex } from "antd";
import ARForm from "../../../components/form/ARForm";
import ARInput from "../../../components/form/ARInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import ARSelect from "../../../components/form/ARSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
    };
    console.log(semesterData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <ARForm onSubmit={onSubmit}>
          <ARInput type="text" label="Semester" name="semester" />
          <ARInput type="text" label="Year" name="year" />
          <ARSelect label="Name" name="name" options={nameOptions} />
          <Button htmlType="submit">Submit</Button>
        </ARForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
