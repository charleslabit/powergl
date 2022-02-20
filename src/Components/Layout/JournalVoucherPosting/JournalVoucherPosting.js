import React, { useState, useEffect } from "react";
import { Form, Row, Col, Input, Select, DatePicker, Table, Button } from "antd";
import moment from "moment";
import axios from "axios";
import { journalVoucherPostingColumns } from "./JournalVoucherPostingConfig";

const JournalVoucherPosting = () => {
	const api = "http://localhost:2929/api/";
	const [branch, setBranch] = useState([]);
	const [form] = Form.useForm();
	const [journalVoucherList, setJournalVoucherList] = useState([]);

	useEffect(() => {
		axios.get(`${api}jvbranch`).then((item) => {
			setBranch(item.data);
		});
	}, []);

	const onSearch = async () => {
		const values = await form.getFieldsValue();
		const toInsert = {
			dtype: "JV",
			branch: values.branch,
			start_date: moment(values.document_date[0]).format('YYYY-MM-DD'),
			end_date: moment(values.document_date[1]).format('YYYY-MM-DD'),
			status: "",
		};
		axios.post(`${api}alltransactionhistory`, toInsert).then((item) => {
            setJournalVoucherList(item.data)
		});
	};
	return (
		<div>
			{/* <Button onClick={onSearch}>Search</Button> */}
			<Form
				labelCol={{ xs: 5, sm: 10, md: 5, lg: 9 }}
				labelAlign="left"
				form={form}
			>
				<Row style={{ padding: 10, marginBottom: 10, backgroundColor: "white" }}>
					<Col xs={24} sm={24} md={24} lg={12}>
						<Form.Item label={"Branch"} style={{ margin: 5 }} name="branch">
							<Select onChange={onSearch}>
								{branch.map((item) => {
									return (
										<Select.Option key={item._code} value={item._code}>
											{item._name}
										</Select.Option>
									);
								})}
							</Select>
						</Form.Item>

						<Form.Item
							label={"Document Date"}
							style={{ margin: 5 }}
							name="document_date"
							initialValue={[moment(), moment()]}
						>
							<DatePicker.RangePicker onChange={onSearch} allowClear={false}></DatePicker.RangePicker>
						</Form.Item>
					</Col>
				</Row>
			</Form>

			<Table
				dataSource={journalVoucherList}
				columns={journalVoucherPostingColumns()}
				rowKey={"doc_no"}
				scroll={{ x: 1350 }}
			></Table>
		</div>
	);
};

export default JournalVoucherPosting;
