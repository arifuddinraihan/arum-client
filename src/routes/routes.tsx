import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import adminPaths from "./admin.routes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import facultyPaths from "./faculty.routes";
import studentPaths from "./student.routes";
import superAdminPaths from "./superAdmin.routes";
import routesGenerator from "../utils/routesGenerator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/superAdmin",
    element: <App />,
    children: routesGenerator(superAdminPaths),
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerator(studentPaths),
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
