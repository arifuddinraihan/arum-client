import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TARInputProps = {
  name: string;
  label?: string;
};

const ARDatePicker = ({ name, label }: TARInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{ width: "100%" }} />
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

export default ARDatePicker;
