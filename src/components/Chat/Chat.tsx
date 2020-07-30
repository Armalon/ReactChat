import React from "react";

import { Card, List } from 'antd'

export interface ChatMessage {
    userName: string
    text: string
}

export interface Props {
    serialNumber: number
    chatMessages: Array<ChatMessage>
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
        </Card>
    )
};

export default Chat