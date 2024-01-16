import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminPathsArray from "./admin.routes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DynamicRouteCreator from "../utils/DynamicRouteCreator";

// const adminPaths = ;

// console.log(adminPaths)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: DynamicRouteCreator(AdminPathsArray),
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
