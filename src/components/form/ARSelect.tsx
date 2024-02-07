import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type ARSelectProps = {
  label: string;
  name: string;
  disabled?: boolean;
  options:
    | {
        value: string;
        label: string;
        disabled?: boolean;
      }[]
    | undefined;
};

const ARSelect = ({ label, name, options, disabled }: ARSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            size="large"
            options={options}
            disabled={disabled}
          />
          {error && (
            <small style={{ color: "red", marginTop: "2px" }}>
              {error.message}
            </small>
          )}
        </Form.Item>
      )}
    />
  );
};

export default ARSelect;
