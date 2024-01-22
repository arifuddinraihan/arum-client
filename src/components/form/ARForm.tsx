import { useForm } from "react-hook-form";

const ARForm = ({ onSubmit, children }) => {
  const { handleSubmit } = useForm();

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
};

export default ARForm;
