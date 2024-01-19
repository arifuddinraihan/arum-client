import { TUserPaths } from "../interface/route.interface";
import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

const studentPaths: TUserPaths[] = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];

export default studentPaths;
