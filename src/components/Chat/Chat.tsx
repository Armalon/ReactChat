import React from "react";
import { Card, List, Input, Form } from 'antd'


const { Search } = Input;

export interface ChatMessage {
    userName: string
    text: string
}

export interface Props {
    serialNumber: number
    chatMessages: Array<ChatMessage>,
    entered: (value: string, chatNumber: number) => void
}

const Chat = (props: Props) => {
    const [form] = Form.useForm();

    return (
        <Card title={`Chat #${props.serialNumber}`}>
            <List
                itemLayout="horizontal"
                dataSource={props.chatMessages}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.userName}</a>}
                        />
                        {item.text}
                    </List.Item>
                )}
            />

            <Form
                form={form}>
                <Form.Item name="message">
                    <Search
                        placeholder="Type a message here"
                        onSearch={(val) => { props.entered(val, props.serialNumber); form.resetFields() }}
                        enterButton="Send" />
                </Form.Item>
            </Form>
        </Card>
    )
};

export default Chat