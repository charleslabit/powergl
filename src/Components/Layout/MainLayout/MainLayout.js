import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Layout, Menu, Button, Typography, Card, Image } from "antd";
import {
  HomeOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Pages } from "./MainLayoutConfig";
import ALILogo from "../../../../public/FlexiForm.png";
import ALILogoOnly from "../../../../public/FlexiLogo.svg";
import {
  content_margin,
  black_font_weight,
  logo,
  home_button,
  content_overflow,
  sider_trigger,
  sider_collapsed,
  fix_sider,
} from "./MainLayout.module.scss";

const MainLayout = ({ Component, pageProps, children }) => {
  const { Sider, Header, Content, Footer } = Layout;
  const router = useRouter();
  const basePath = router.route.split("/")?.[1];
  const defaultPath = router.route;
  const [collapsed, setCollapsed] = useState(false);

  const goTo = (page) => {
    router.push(page);
  };

  if (basePath === "login") return children;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        style={{ backgroundColor: "white" }}
        breakpoint={"lg"}
        className={fix_sider}
        width={220}
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={logo}>
          <Typography.Title className={black_font_weight}>
            <Card bordered={false}>
              <Image
                src={collapsed ? ALILogoOnly : ALILogo}
                alt="Logo"
                preview={false}
              ></Image>
            </Card>
          </Typography.Title>
        </div>
        <div className="center">
          {collapsed ? (
            <HomeOutlined className={"pointer"} onClick={() => goTo("/")} />
          ) : (
            <Button
              className={home_button}
              icon={<HomeOutlined />}
              onClick={() => goTo("/")}
            >
              Home
            </Button>
          )}
        </div>
        <Menu
          defaultSelectedKeys={[defaultPath]}
          mode="inline"
          style={{ overflowY: "auto", overflowX: "hidden", height: "70vh" }}
        >
          {Pages().map((page) => {
            return (
              <Menu.SubMenu key={page.key} icon={page.icon} title={page.name}>
                {page?.children?.map((child) => {
                  return (
                    <Menu.Item
                      onClick={() => goTo(child.to)}
                      key={child.key}
                      icon={child.icon}
                    >
                      {child.name}
                    </Menu.Item>
                  );
                })}
              </Menu.SubMenu>
            );
          })}
        </Menu>
        {collapsed ? (
          <RightCircleOutlined
            className={sider_trigger}
            style={{ left: collapsed ? "84%" : "95%" }}
            onClick={() => setCollapsed(!collapsed)}
          />
        ) : (
          <LeftCircleOutlined
            className={sider_trigger}
            style={{ left: collapsed ? "84%" : "95%" }}
            onClick={() => setCollapsed(!collapsed)}
          />
        )}
      </Sider>
      <Layout className={collapsed ? sider_collapsed : content_margin}>
        <Content style={{ padding: 0 }}>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
