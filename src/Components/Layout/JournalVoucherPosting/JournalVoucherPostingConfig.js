import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import { Space } from "antd";

export const journalVoucherPostingColumns = () => {
	return [
		{
			title: "Branch",
			dataIndex: "b_code",
			key: "b_code",
			width: 80,
			align: "center",
		},
		{
			title: "Document No.",
			dataIndex: "doc_no",
			key: "doc_no",
			align: "center",
			width: 100,
		},

		{
			title: "Document Date",
			dataIndex: "doc_date",
			key: "doc_date",
			align: "center",
			width: 100,
            render: (text)=> moment(text).format('YYYY-MM-DD')
		},
		{
			title: "Reference No.",
			dataIndex: "ref_no",
			key: "ref_no",
			align: "center",
			width: 100,
		},
		{
			title: "Line Entries",
			dataIndex: "no_entries",
			key: "no_entries",
			align: "center",
			width: 100,
		},
		{
			title: "DR",
			dataIndex: "dr",
			key: "dr",
			align: "center",
			width: 150,
		},
		{
			title: "CR",
			dataIndex: "cr",
			key: "cr",
			align: "center",
			width: 100,
		},
		{
			title: "Status",
			dataIndex: "tran_status",
			key: "tran_status",
			align: "center",
			width: 100,
		},

		{
			title: "Remarks",
			dataIndex: "remarks",
			key: "remarks",
			align: "center",
			width: 200,
		},
		{
			title: "Actions",
			dataIndex: "actions",
			key: "Actions",
			width: 80,
			align: "center",
			fixed: "right",
			render: (text, record) => {
				return (
					<Space>
						<span>ACtion</span>
					</Space>
				);
			},
		},
	];
};
