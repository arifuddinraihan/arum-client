import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Register from "../pages/register";
import { adminPathas } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: adminPathas,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
