import React, { useContext } from "react";
import { Card, Row, Col, Typography } from "antd";
import { useRouter } from "next/router";

import PageTitle from "../../Modules/PageTitle/PageTitle";
import ProjectPicture from "../../../../public/Projects.png";
import ReportPicture from "../../../../public/Reports.png";
import UserPicture from "../../../../public/User Management.png";

import PagesInfo from "./PagesInfo";
import style from "./pages.module.scss";

const Pages = () => {
    const router = useRouter();

    return (
        <div style={{ overflow: "hidden" }}>
            <PageTitle title="Home" />
            <Row justify="center" className="pointer" gutter={[16, 16]}>
                <Col>
                    <Card
                        onClick={() => {
                            router.push("/generalaccounting/journalvoucher");
                        }}
                        className={style.project}
                        bodyStyle={{
                            padding: 0,
                            margin: 5,
                            position: "relative",
                        }}
                    >
                        <PagesInfo url={ProjectPicture} text="General Accounting" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        onClick={() => {
                            router.push("/MasterReference");
                        }}
                        className={style.user}
                        bodyStyle={{
                            padding: 0,
                            margin: 5,
                            position: "relative",
                        }}
                    >
                        <PagesInfo url={UserPicture} text="Master Reference" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        onClick={() => {
                            router.push("/Payable");
                        }}
                        className={style.user}
                        bodyStyle={{
                            padding: 0,
                            margin: 5,
                            position: "relative",
                        }}
                    >
                        <PagesInfo url={UserPicture} text="Payable" />
                    </Card>
                </Col>

                <Col>
                    <Card
                        onClick={() => {
                            router.push("/Receivable");
                        }}
                        className={style.report}
                        bodyStyle={{
                            padding: 0,
                            margin: 5,
                        }}
                    >
                        <PagesInfo url={ReportPicture} text="Receivable" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        onClick={() => {
                            router.push("/Sales");
                        }}
                        className={style.report}
                        bodyStyle={{
                            padding: 0,
                            margin: 5,
                        }}
                    >
                        <PagesInfo url={ReportPicture} text="Sales" />
                    </Card>
                </Col>
                <Col>
                    <Card
                        onClick={() => {
                            router.push("/Security");
                        }}
                        className={style.report}
                        bodyStyle={{
                            padding: 0,
                            margin: 5,
                        }}
                    >
                        <PagesInfo url={ReportPicture} text="Security" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Pages;
