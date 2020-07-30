import React from 'react';
import './App.css';
import 'antd/dist/antd.css'

import Chat, { ChatMessage } from "./components/Chat/Chat";
import { SearchProps } from "antd/es/input/Search";

import { Space } from 'antd'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
    const chatWindowsCount = 4

    // todo: put in a MobX state
    // and make it reactive
    const chatMessages: Array<ChatMessage> = [
        {
            userName: 'user #1',
            text: 'Some message'
        },
        {
            userName: 'user #3',
            text: 'Another message'
        },
        {
            userName: 'user #4',
            text: 'Last message'
        },
    ]

    const newMessageAddedHandler = (value: string, chatNumber: number) => {
        chatMessages.push({
            userName: `user #${chatNumber}`,
            text: value
        })
    }

    const Chats = Array.apply(null, Array(4)).map((v, k) => {
        return <Chat
            entered={newMessageAddedHandler}
            chatMessages={chatMessages}
            serialNumber={k + 1}
            key={k}
        />
    })

    return (
        <Layout>
            <Header>
                Welcome to chats!
            </Header>
            <Content>
                <Space direction="vertical" style={{ width: '100%' }}>
                    {Chats}
                </Space>
            </Content>
            <Footer>
                Footer here
            </Footer>
        </Layout>
    );
}

export default App;
