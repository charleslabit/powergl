import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Layout, Menu, Breadcrumb, Button, Row, Col, Typography, Card, Image, List, Space } from "antd";
import { HomeOutlined, LeftCircleTwoTone, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import PageHeaderButton from "../PageHeaderButton/PageHeaderButton";
import { Pages } from "./SiderMenuConfig";
import ALILogo from "../../../../public/FlexiForm.png";
import ALILogoOnly from "../../../../public/FlexiLogo.svg";
import {
    content_margin,
    black_font_weight,
    logo,
    home_button,
    path_name,
    content_overflow,
    back_button,
    sider_trigger,
    sider_collapsed,
    header_wrapper,
    route_back_button,
    fix_sider,
} from "./sider-menu.module.scss";

const SiderMenu = ({ children }) => {
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
                width={204}
                trigger={null}
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className={logo}>
                    <Typography.Title className={black_font_weight}>
                        <Card bordered={false}>
                            <Image src={collapsed ? ALILogoOnly : ALILogo} alt="Logo" preview={false}></Image>
                        </Card>
                    </Typography.Title>
                </div>
                <div className="center">
                    {collapsed ? (
                        <HomeOutlined className={"pointer"} onClick={() => goTo("/")} />
                    ) : (
                        <Button className={home_button} icon={<HomeOutlined />} onClick={() => goTo("/")}>
                            Home
                        </Button>
                    )}
                </div>

                <Menu defaultSelectedKeys={[defaultPath]} mode="inline">
                    <Menu.ItemGroup key="1" title="Menu" style={{ textAlign: collapsed && "center" }}>
                        {(Pages()?.[basePath] || []).map((page) => (
                            <Menu.Item key={page.key} icon={page.icon} onClick={() => goTo(page.to)}>
                                {page.name}
                            </Menu.Item>
                        ))}
                    </Menu.ItemGroup>
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
                <Header className={"no-padding"} style={{ backgroundColor: "#F0F2F5", padding: 0 }}>
                    <div className={header_wrapper}>
                        <Space align="center">
                            <div className={back_button}>
                                <LeftCircleOutlined className={route_back_button} onClick={router.back} />
                            </div>
                            <Breadcrumb className={path_name}>
                                {router.asPath.split("/").map((path, i) => {
                                    if (!path) return;
                                    console.log(
                                        Pages()[basePath].find((value) => {
                                            return value.key === router.route;
                                        }).name
                                    );
                                    return (
                                        <Breadcrumb.Item key={i}>
                                            <span>
                                                {
                                                    Pages()[basePath].find((value) => {
                                                        return value.key === router.route;
                                                    }).name
                                                }
                                            </span>
                                        </Breadcrumb.Item>
                                    );
                                })}
                            </Breadcrumb>
                        </Space>
                        <PageHeaderButton />
                    </div>
                </Header>

                <Content className={content_overflow}>{children}</Content>
            </Layout>
        </Layout>
    );
};

export default SiderMenu;
