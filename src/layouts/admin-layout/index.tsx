import { Layout, Menu, MenuProps, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: `users`,
    // icon: React.createElement(icon),
    label: `Users`,

    children: [
      {
        key: 0,
        label: <Link to="/admin/users">Users</Link>,
      },
    ],
  },
  {
    key: "blogs",

    label: "Blogs",
    children: [
      {
        key: "1",
        label: <Link to="/admin/dashboard">All Blogs</Link>,
      },
    ],
  },
];
const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          // items={items1}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
      </Header>
      <Content style={{ padding: "0 48px" }}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%" }}
              items={items2}
            />
          </Sider>
          <Content style={{ padding: "0 24px", minHeight: "80vh" }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default AdminLayout;
