import React, { useState, useContext } from "react";
import { Avatar, Dropdown, Menu, Space, Modal, Input, Card, Form } from "antd";
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, LogoutOutlined, KeyOutlined } from "@ant-design/icons";
import toastr from "toastr";
import { useRouter } from "next/router";
import { user_name, container, text_container, menu_style, avatar_color } from "./PageHeaderButton.module.scss";

const PageHeaderButton = () => {
    const router = useRouter();
    const [form] = Form.useForm();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClick = (e) => {
        switch (e.key) {
            case "logout":
                {
                    toastr.success("Logout Successfully");
                    router.push("/login");
                }
                break;
            case "changepass":
                {
                    setIsOpen(true);
                }
                break;
        }
    };

    const onOk = async () => {};

    const menu = () => (
        <Menu className={menu_style} onClick={onClick}>
            <Menu.Item key="changepass" className="center" icon={<KeyOutlined />}>
                <a>Change Password</a>
            </Menu.Item>
            <Menu.Item key="logout" className="center" icon={<LogoutOutlined />}>
                <a>Logout</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <Space>
                <div className={text_container}>
                    <span>charles</span>
                </div>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <Avatar size={30} className={`pointer ${avatar_color}`} icon={<UserOutlined />} src={""} />
                </Dropdown>
            </Space>

            {isOpen && (
                <Modal
                    title="Change Password"
                    visible={isOpen}
                    okText={"Submit"}
                    onOk={onOk}
                    onCancel={() => {
                        setIsOpen(false);
                        form.resetFields();
                    }}
                    bodyStyle={{ padding: 0 }}
                    width={400}
                    forceRender
                    okButtonProps={{ loading: isLoading }}
                    cancelButtonProps={{ loading: isLoading }}
                    maskClosable={false}
                >
                    <Card>
                        <Form form={form}>
                            <Form.Item
                                name="old_password"
                                validateTrigger={["onChange", "onBlur"]}
                                rules={[
                                    {
                                        required: true,
                                        message: "Invalid password!",
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Old Password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                ></Input.Password>
                            </Form.Item>
                            <Form.Item
                                name="new_password"
                                validateTrigger={["onChange", "onBlur"]}
                                rules={[
                                    {
                                        required: true,
                                        message: "Invalid password!",
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="New Password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                ></Input.Password>
                            </Form.Item>
                            <Form.Item
                                name="confirm_password"
                                validateTrigger={["onChange", "onBlur"]}
                                rules={[
                                    {
                                        required: true,
                                        message: "Invalid password!",
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue("new_password") === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(
                                                new Error("The two passwords that you entered do not match!")
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password
                                    placeholder="Confirm Password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                ></Input.Password>
                            </Form.Item>
                        </Form>
                    </Card>
                </Modal>
            )}
        </>
    );
};

export default PageHeaderButton;
