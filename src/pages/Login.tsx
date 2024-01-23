import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ARForm from "../components/form/ARForm";
import ARInput from "../components/form/ARInput";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const defaultValues = {
    userId: "A-0001",
    password: "admin123",
  };

  const [login] = useLoginMutation();

  // console.log("data =>", data);
  // console.log("error =>", error);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const userToken = res.data.accessToken;
      const user = verifyToken(userToken) as TUser;

      dispatch(setUser({ user: user, token: userToken }));

      toast.success("Logged in", { id: toastId, duration: 3000 });

      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <ARForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <ARInput type="text" name="userId" label="ID:" />
        <ARInput type="text" name="password" label="Password" />

        {/* Make sure to use htmlType="button" during use of ANTD button */}
        <Button htmlType="submit">Login</Button>
      </ARForm>
    </Row>
  );
};

export default Login;
