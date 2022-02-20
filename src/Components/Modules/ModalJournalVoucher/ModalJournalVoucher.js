import React, { useState, useEffect } from "react";
import {
	Button,
	Modal,
	Form,
	Input,
	Select,
	Row,
	Col,
	InputNumber,
} from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from "uuid";

const ModalJournalVoucher = ({
	initialValues,
	journalVoucherList,
	setJournalVoucherList,
	glList,
	ccList,
	slList,
}) => {
	const [modalForm] = Form.useForm();
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		if (initialValues) modalForm.setFieldsValue(initialValues);
		else modalForm.resetFields();
	}, [isModalVisible]);

	const saveData = async () => {
		const values = await modalForm.validateFields();
		values.line_no = uuidv4();
		if (initialValues) {
			const newArr = [...journalVoucherList];
			const index = newArr.findIndex((item) => {
				return item.line_no === initialValues.line_no;
			});
			newArr.splice(index, 1, values);
			setJournalVoucherList(newArr);
		} else {
			setJournalVoucherList([...journalVoucherList, values]);
		}
		onClose();
	};

	const onClose = () => {
		setIsModalVisible(false);
		modalForm.resetFields();
	};
	return (
		<>
			{initialValues ? (
				<EditOutlined
					onClick={() => {
						setIsModalVisible(true);
					}}
				/>
			) : (
				<Button
					style={{ width: 80, marginBottom: 10 }}
					onClick={() => {
						setIsModalVisible(true);
					}}
					icon={<PlusOutlined />}
				>
					Add
				</Button>
			)}

			<Modal
				visible={isModalVisible}
				onCancel={onClose}
				onOk={saveData}
				title={"Journal Voucher"}
				width={800}
				centered
			>
				<Form layout="vertical" form={modalForm} labelAlign="left">
					<Row gutter={[8, 8]}>
						<Col span={12}>
							<Form.Item label="CC" style={{ margin: 0 }} name="cc">
								<Select
									showSearch
									optionFilterProp="children"
									filterOption={(input, option) => {
										return (
											option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										);
									}}
								>
									{ccList?.map((items) => {
										return (
											<Select.Option
												key={items._code}
												value={`${items._code} - ${items._name}`}
											>
												{`${items._code} - ${items._name}`}
											</Select.Option>
										);
									})}
								</Select>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="GL" style={{ margin: 0 }} name="gl">
								<Select
									showSearch
									optionFilterProp="children"
									filterOption={(input, option) => {
										return (
											option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										);
									}}
								>
									{glList?.map((items) => {
										return (
											<Select.Option
												key={items._code}
												value={`${items._code} - ${items._name}`}
											>
												{`${items._code} - ${items._name}`}
											</Select.Option>
										);
									})}
								</Select>
							</Form.Item>
						</Col>

						<Col span={12}>
							<Form.Item label="SL" style={{ margin: 0 }} name="sl">
								<Select
									showSearch
									optionFilterProp="children"
									filterOption={(input, option) => {
										return (
											option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
										);
									}}
								>
									{slList?.map((items) => {
										return (
											<Select.Option
												key={items.sl_code}
												value={`${items.sl_code} - ${items.sl_name}`}
											>
												{`${items.sl_code} - ${items.sl_name}`}
											</Select.Option>
										);
									})}
								</Select>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item label="VAT / ATC" style={{ margin: 0 }} name="vat">
								<Input />
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item
								label="Cost / Profit Center"
								style={{ margin: 0 }}
								name="cost"
							>
								<InputNumber style={{ width: "100%" }} />
							</Form.Item>
						</Col>

						<Col span={8}>
							<Form.Item label="Debit" style={{ margin: 0 }} name="debit">
								<InputNumber style={{ width: "100%" }} />
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item label="Credit" style={{ margin: 0 }} name="credit">
								<InputNumber style={{ width: "100%" }} />
							</Form.Item>
						</Col>
						<Col span={24}>
							<Form.Item label="Remarks" style={{ margin: 0 }} name="remarks">
								<Input.TextArea style={{ height: 100 }} />
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Modal>
		</>
	);
};

export default ModalJournalVoucher;
