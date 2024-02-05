import { Button, Col, Layout, Row } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Layout style={{ height: "100%" }}>
      {/* Menu Sidebar Here to handle role based sidebar */}
      <Sidebar />
      <Layout>
        <Header>
          <div>
            <Row justify="end">
              <Col>
                <Button type="default" onClick={handleLogout}>
                  Logout
                </Button>
              </Col>
            </Row>
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* Outlet here in App */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
