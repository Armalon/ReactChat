import React from "react";

import { Card, List, Input } from 'antd'
import {SearchProps} from "antd/es/input/Search";

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
            <Search
                placeholder="Type a message here"
                onSearch={(val) => props.entered(val, props.serialNumber)}
                enterButton="Send" />
        </Card>
    )
};

export default Chat