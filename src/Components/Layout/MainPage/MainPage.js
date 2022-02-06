import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { Layout, Row, Col, Typography, Image, Tag, Modal, Timeline } from "antd";

import SiderMenu from "../SiderMenu/SiderMenu";
import PageHeaderButton from "../PageHeaderButton/PageHeaderButton";
import "toastr/build/toastr.min.css";

import ALILogo from "../../../../public/FlexiForm.png";

const { Header } = Layout;
const { Content } = Layout;

const MainPage = ({ Component, pageProps }) => {
    const router = useRouter();
    const pathName = router.pathname;

    return (
        <>
            {pathName === "/" ? (
                <Layout style={{ minHeight: "100vh" }}>
                    <Header style={{ width: "100%", padding: 0, backgroundColor: "white" }}>
                        <div style={{ display: "flex", placeContent: "center space-between", margin: "0 25px" }}>
                            <div style={{ alignSelf: "center", height: "45px" }}>
                                <Image height={45} src={ALILogo} alt="Logo" preview={false}></Image>
                            </div>
                            <PageHeaderButton />
                        </div>
                    </Header>
                    <Content style={{ marginLeft: 25, marginTop: 50 }}>
                        <Component {...pageProps} />
                    </Content>
                </Layout>
            ) : pathName === "/login" ? (
                <Component {...pageProps} />
            ) : (
                <SiderMenu>
                    <Component {...pageProps} />
                </SiderMenu>
            )}
        </>
    );
};

export default MainPage;
