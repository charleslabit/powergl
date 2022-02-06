import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import moment from "moment";

export const ListOfOrganizationsColumn = (setSelectedOrganization, setIsOpenDialog) => {
    return [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Total Users",
            dataIndex: "total_users",
            align: "center",
        },
        {
            title: "Created Date",
            dataIndex: "date_created",
            render: (text) => {
                return moment(text).format("YYYY-MM-DD hh:mm:ss");
            },
        },
        {
            title: "Updated Date",
            dataIndex: "date_updated",
            render: (text) => {
                if (text) return moment(text).format("YYYY-MM-DD hh:mm:ss");
            },
        },
        {
            title: "",
            key: "action",
            render: (text, record) => {
                return (
                    <Button
                        type="text"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedOrganization(record);
                            setIsOpenDialog(true);
                        }}
                    >
                        <EditOutlined></EditOutlined>
                    </Button>
                );
            },
        },
    ];
};
