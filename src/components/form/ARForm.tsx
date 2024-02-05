import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TARFormProps = {
  onSubmit: SubmitErrorHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

const ARForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}: TARFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const AROnSubmit: SubmitHandler<FieldValues> = (data) => {
    // Handling the onSubmit which received from parent component
    onSubmit(data);

    // Resetting the form here
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(AROnSubmit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default ARForm;
