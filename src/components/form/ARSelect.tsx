import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type ARSelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

const ARSelect = ({ label, name, options }: ARSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            size="large"
            options={options}
          />
        </Form.Item>
      )}
    />
  );
};

export default ARSelect;
