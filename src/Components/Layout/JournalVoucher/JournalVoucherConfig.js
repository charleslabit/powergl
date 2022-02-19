import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Space } from "antd";
import ModalJournalVoucher from "../../Modules/ModalJournalVoucher/ModalJournalVoucher";

export const journalVoucherColumns = (
	journalVoucherList,
	setJournalVoucherList,
	gLList,
  ccList
) => {
	return [
		{
			title: "Line No.",
			dataIndex: "line_no",
			key: "line_no",
			width: 70,
			align: "center",
			render: (text, record, index) => {
				const str = "" + (index + 1);
				const pad = "0000";
				return pad.substring(0, pad.length - str.length) + str;
			},
		},
		{
			title: "GL",
			dataIndex: "gl",
			key: "gl",
			align: "center",
			width: 200,
			render: (text, record) => {
				return <span>{text}</span>;
			},
		},
		// {
		// 	title: "GL Name",
		// 	dataIndex: "gl",
		// 	key: "gl",
		// 	render: (text, record) => {
		// 		const newArr = text.split("-");
		// 		newArr.shift();
		// 		return <span>{newArr.join(",")}</span>;
		// 	},
		// },
		{
			title: "CC",
			dataIndex: "cc",
			key: "cc",
			align: "center",
			width: 200,
		},
		{
			title: "Cost / Profit Center",
			dataIndex: "cost",
			key: "cost",
			align: "center",
			width: 100,
		},
		{
			title: "SL Code",
			dataIndex: "sl_code",
			key: "sl_code",
			align: "center",
			width: 100,
		},
		{
			title: "Subsidiary Name",
			dataIndex: "subsidiary_name",
			key: "subsidiary_name",
			align: "center",
			width: 150,
		},
		{
			title: "VAT / ATC",
			dataIndex: "vat",
			key: "vat",
			align: "center",
			width: 100,
		},
		{
			title: "Debit",
			dataIndex: "debit",
			key: "debit",
			align: "center",
			width: 100,
		},
		{
			title: "Credit",
			dataIndex: "credit",
			key: "credit",
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
						<ModalJournalVoucher
							initialValues={record}
							journalVoucherList={journalVoucherList}
							setJournalVoucherList={setJournalVoucherList}
							gLList={gLList}
              ccList={ccList}
						/>
						<DeleteOutlined
							onClick={() => {
								const newArr = [...journalVoucherList];
								const index = newArr.findIndex((item) => {
									return item.line_no === record.line_no;
								});
								newArr.splice(index, 1);
								setJournalVoucherList(newArr);
							}}
						/>
					</Space>
				);
			},
		},
	];
};
