import React, { useEffect, useState, useLayoutEffect } from "react";
import {
	Button,
	Table,
	Select,
	Card,
	Form,
	Input,
	Row,
	Col,
	Tabs,
	Descriptions,
	Space,
	DatePicker,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import moment from "moment";
import { journalVoucherColumns } from "./JournalVoucherConfig";
import ModalJournalVoucher from "../../Modules/ModalJournalVoucher/ModalJournalVoucher";
import GlobalFormatter from "../../Utilities/GlobalFormatter";

const JournalVoucher = () => {
	const api = "http://localhost:2929/api/";
	const [form] = Form.useForm();
	const [branch, setBranch] = useState([]);
	const [glList, setGLList] = useState([]);
	const [ccList, setCCList] = useState([]);
	const [journalVoucherList, setJournalVoucherList] = useState([]);

	useEffect(() => {
		axios.get(`${api}jvbranch`).then((item) => {
			setBranch(item.data);
		});

		axios.get(`${api}jvglcode`).then((item) => {
			setGLList(item.data);
		});

		axios.get(`${api}jvcc`).then((item) => {
			setCCList(item.data);
		});
	}, []);

	const onSave = async () => {
		const values = await form.getFieldValue();
		const translatedValue = GlobalFormatter.translateDate(values);

		const toInsertHeaderDetails = {
			branch: translatedValue.branch,
			docNo: translatedValue.document_no,
			doc_date: translatedValue.document_date,
			doc_amt: 0,
			ref_no: translatedValue.reference,
			remarks: translatedValue.remarks,
			period: "",
			dtype: "",
			uid: "charles",
			uname: "charles",
			pc: "",
			mac: "",
		};

		axios.post(`${api}jvh`, toInsertHeaderDetails).then((res) => {
			if (res.status === 200) {
				console.log("OK");
			}
		});

		for (let i = 0; i < journalVoucherList?.length; i++) {
			const str = "" + (i + 1);
			const pad = "0000";
			const toInsertDetails = {
				branch: translatedValue.branch,
				docNo: translatedValue.document_no,
				lineNo: pad.substring(0, pad.length - str.length) + str,
				glCode: journalVoucherList[i]?.gl.split("-")[0],
				ccCode: journalVoucherList[i]?.cc.split("-")[0],
				slCode: journalVoucherList[i]?.sl.split("-")[0],
				vatATC: journalVoucherList[i]?.vat,
				debit: journalVoucherList[i]?.debit,
				credit: journalVoucherList[i]?.credit,
				remarks: journalVoucherList[i]?.remarks,
				i: i + 1,
			};
			axios.post(`${api}jvd2`, toInsertDetails).then((res) => {
				if (res.status === 200) {
					console.log("OK");
				}
			});
		}
	};

	return (
		<div>
			<Form
				labelCol={{ xs: 5, sm: 10, md: 5, lg: 9 }}
				labelAlign="left"
				form={form}
			>
				<Row style={{ padding: 10, marginBottom: 10, backgroundColor: "white" }}>
					<Col xs={24} sm={24} md={24} lg={12}>
						<Button onClick={onSave}>SAVE</Button> <Button>A</Button>{" "}
						<Button>A</Button> <Button>A</Button>
						<Form.Item label={"Branch"} style={{ margin: 5 }} name="branch">
							<Select>
								{branch.map((item) => {
									return (
										<Select.Option key={item._code} value={item._code}>
											{item._name}
										</Select.Option>
									);
								})}
							</Select>
						</Form.Item>
						<Form.Item label={"Document No"} style={{ margin: 5 }} name="document_no">
							<Input></Input>
						</Form.Item>
						<Form.Item
							label={"Document Date"}
							style={{ margin: 5 }}
							name="document_date"
							initialValue={moment()}
						>
							<DatePicker></DatePicker>
						</Form.Item>
						<Form.Item
							label={"Internal Reference"}
							style={{ margin: 5 }}
							name="reference"
						>
							<Input></Input>
						</Form.Item>
					</Col>
					<Col xs={24} sm={24} md={24} lg={12}>
						<Tabs tabPosition="bottom" type="card">
							<Tabs.TabPane tab="Remarks" key="Remarks">
								<Form.Item
									label={"Extended Description"}
									style={{ margin: 0 }}
									name="remarks"
								>
									<Input.TextArea style={{ height: 178 }}></Input.TextArea>
								</Form.Item>
							</Tabs.TabPane>
							<Tabs.TabPane tab="Audit trail" key="Audit trail">
								<Descriptions
									column={2}
									style={{ border: "1px solid #A8A8A8", padding: 5, height: 178 }}
								>
									<Descriptions.Item label="Create By">Zhou Maomao</Descriptions.Item>
									<Descriptions.Item label="Cancelled By">1810000000</Descriptions.Item>
									<Descriptions.Item label="Created Date">
										Hangzhou, Zhejiang
									</Descriptions.Item>
									<Descriptions.Item label="Cancelled Date">empty</Descriptions.Item>
									<Descriptions.Item label="Modified By">asd</Descriptions.Item>
									<Descriptions.Item label="Posted By">asd</Descriptions.Item>
									<Descriptions.Item label="Modified Date">asd</Descriptions.Item>
									<Descriptions.Item label="Posted Date">asd</Descriptions.Item>
								</Descriptions>
							</Tabs.TabPane>
						</Tabs>
					</Col>
				</Row>
			</Form>

			<div style={{ textAlign: "right" }}>
				<ModalJournalVoucher
					journalVoucherList={journalVoucherList}
					setJournalVoucherList={setJournalVoucherList}
					glList={glList}
					ccList={ccList}
				></ModalJournalVoucher>
			</div>
			<Table
				dataSource={journalVoucherList}
				columns={journalVoucherColumns(
					journalVoucherList,
					setJournalVoucherList,
					glList,
					ccList
				)}
				rowKey={"line_no"}
				scroll={{ x: 1350 }}
			></Table>
		</div>
	);
};

export default JournalVoucher;
