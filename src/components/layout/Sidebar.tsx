import { Layout, Menu } from "antd";
import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
import adminPaths from "../../routes/admin.routes";
import facultyPaths from "../../routes/faculty.routes";
import studentPaths from "../../routes/student.routes";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import superAdminPaths from "../../routes/superAdmin.routes";

const { Sider } = Layout;

const userRole = {
  SUPERADMIN: "superAdmin",
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  let sidebarItems;

  switch (user!.role) {
    case userRole.SUPERADMIN:
      sidebarItems = sidebarItemsGenerator(superAdminPaths, "superAdmin");
      break;
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, "faculty");
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, "student");
      break;

    default:
      break;
  }

  return (
    <Sider
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          AR Uni
        </h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
