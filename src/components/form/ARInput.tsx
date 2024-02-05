import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TARInputProps = {
  type: string;
  name: string;
  label?: string;
};

const ARInput = ({ type, name, label }: TARInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" />
            {error && (
              <small style={{ color: "red", marginTop: "2px" }}>
                {error.message}
              </small>
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default ARInput;
