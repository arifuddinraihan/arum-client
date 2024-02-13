import {
  Button,
  Col,
  ConfigProvider,
  Layout,
  Row,
} from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
// import { useState } from "react";

const { Header, Content } = Layout;

const MainLayout = () => {
  // const [primary, setPrimary] = useState("#1677ff");

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <ConfigProvider
      // theme={{
      //   token: {
      //     colorPrimary: primary,
      //   },
      // }}
      >
        <Layout style={{ height: "100%" }}>
          {/* Menu Sidebar Here to handle role based sidebar */}
          <Sidebar />
          <Layout>
            <Header>
              <div>
                <Row
                  justify="end"
                  style={{
                    display: "flex",
                    gap: "16px",
                    justifyContent: "end",
                    alignItems: "center",
                  }}
                >
                  {/* <Col>
                    <Row
                      style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      gutter={4}
                    >
                      <Typography style={{ color: "white" }}>
                        Select Theme:
                      </Typography>
                      <ColorPicker
                        showText
                        value={primary}
                        onChangeComplete={(color) =>
                          setPrimary(color.toHexString())
                        }
                      />
                    </Row>
                  </Col> */}
                  <Col>
                    <Button type="primary" onClick={handleLogout}>
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
      </ConfigProvider>
    </>
  );
};

export default MainLayout;
