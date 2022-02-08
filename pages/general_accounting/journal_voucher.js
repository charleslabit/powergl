import React, { useEffect } from "react";
import { Button, Table, Select, Card, Form, Input, Row, Col, Tabs } from "antd";
import axios from "axios";

const JournalVoucher = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Line #",
      dataIndex: "line",
      key: "line",
    },
    {
      title: "GL Code",
      dataIndex: "glcode",
      key: "glcode",
    },
    {
      title: "GL NAME",
      dataIndex: "GL NAME",
      key: "GL NAME",
    },
    {
      title: "CC Code",
      dataIndex: "CC Code",
      key: "CC Code",
    },
    {
      title: "Cost/Profit Center",
      dataIndex: "Cost/Profit Center",
      key: "Cost/Profit Center",
    },
    {
      title: "SL Code",
      dataIndex: "SL Code",
      key: "SL Code",
    },
    {
      title: "Subsidiary Name",
      dataIndex: "subsidiaryname",
      key: "subsidiaryname",
    },
    {
      title: "VAT/ATC",
      dataIndex: "VAT/ATC",
      key: "VAT/ATC",
    },
    {
      title: "DEBIT",
      dataIndex: "DEBIT",
      key: "DEBIT",
    },
    {
      title: "CREDIT",
      dataIndex: "CREDIT",
      key: "CREDIT",
    },
    {
      title: "REMARKS",
      dataIndex: "REMARKS",
      key: "REMARKS",
    },
  ];
  return (
    <div>
      {/* <Button
        onClick={() => {
          const api = "http://localhost:2929/api/get/";
          axios.get(api).then((data) => {
            console.log("DATA", data);
          });
        }}
      >
        FETCH
      </Button> */}

      <Row gutter={[8,8]}>
        <Col span={8}>
          <Form labelCol={{ span: 9 }} labelAlign="left">
            <Form.Item label={"Branch"} style={{margin:0}}>
              <Select></Select>
            </Form.Item>
            <Form.Item label={"Document No"}  style={{margin:0}}>
              <Input></Input>
            </Form.Item>
            <Form.Item label={"Document Date"}  style={{margin:0}}>
              <Select></Select>
            </Form.Item>
            <Form.Item label={"Internal Reference"}  style={{margin:0}}>
              <Input></Input>
            </Form.Item>
          </Form>
        </Col>
        <Col span={16}>
          <Tabs tabPosition="bottom">
            <Tabs.TabPane tab="Remarks" key="Remarks">
              <Form>
                <Form.Item label={"Extended Description"}  style={{margin:0}}>
                  <Input.TextArea></Input.TextArea>
                </Form.Item>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Audit trail" key="Audit trail">
              Audit
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  );
};

export default JournalVoucher;
