import React from "react";
import { Avatar, Card, Typography, Divider } from "antd";
import style from "./PageHeaderContent.module.scss";
const { Meta } = Card;
const { Text } = Typography;

const PageHeaderContent = () => {
    return (
        <div>
            <Text className={"center pointer"} type="secondary">
                Logout
            </Text>
        </div>
    );
};

export default PageHeaderContent;
