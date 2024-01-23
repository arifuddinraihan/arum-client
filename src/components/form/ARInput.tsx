import { Input } from "antd";
import { Controller } from "react-hook-form";

type TARInputProps = {
  type: string;
  name: string;
  label?: string;
};

const ARInput = ({ type, name, label }: TARInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default ARInput;
