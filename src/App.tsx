import React from 'react';
import './App.css';
import 'antd/dist/antd.css'

import Chat, { ChatMessage } from "./components/Chat/Chat";

import { Space } from 'antd'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
    const chatWindowsCount = 4

    // todo: put in a MobX state
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

    const Chats = Array.apply(null, Array(4)).map((v, k) => {
        return <Chat chatMessages={chatMessages} serialNumber={k + 1} />
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
