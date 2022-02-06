import { Tag } from "antd";
export const MemberSelectionColumn = (currentMembers) => {
    return [
        {
            title: "Name",
            dataIndex: "name",
            render: (name, record) => (
                <span>
                    {currentMembers.find((member) => member.username === record.username) ? (
                        <span style={{ color: "red" }}>{name}</span>
                    ) : (
                        <span>{name}</span>
                    )}
                </span>
            ),
        },
    ];
};
