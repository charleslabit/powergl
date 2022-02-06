import { Tag, Space } from "antd";
import moment from "moment";
export const UserColumn = [
    {
        title: "Date Created",
        dataIndex: "date_created",
        render: (text) => {
            return <span>{moment(text).format("YYYY-MM-DD hh:mm:ss")}</span>;
        },
    },

    {
        title: "Project",
        dataIndex: "project",
    },
    {
        title: "Activity",
        dataIndex: "survey",
    },
];

export const ListOfUsersColumn = [
    {
        title: "Username",
        dataIndex: "username",
        render: (text) => {
            return <span>{text.split("@")[0]}</span>;
        },
    },
    {
        title: "Name",
        dataIndex: "name",
    },

    {
        title: "Email",
        dataIndex: "email",
    },

    {
        title: "Status",
        dataIndex: "user_status",
        render: (user_status) => (
            <Space>
                {user_status === "ACTIVE" ? (
                    <>
                        <span
                            style={{
                                height: "5px",
                                width: "5px ",
                                backgroundColor: "#00D0C2",
                                borderRadius: "50%",
                                display: "inline-block",
                                marginBottom: "2px",
                            }}
                        />
                        Active
                    </>
                ) : (
                    <>
                        <span
                            style={{
                                height: "5px",
                                width: "5px ",
                                backgroundColor: "#FF3E3D",
                                borderRadius: "50%",
                                display: "inline-block",
                                marginBottom: "2px",
                            }}
                        />
                        Disabled
                    </>
                )}
            </Space>
        ),
    },
];
