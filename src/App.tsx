import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'

import Hello from "./components/Hello";

import { Space, Card } from 'antd'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
    return (
        <Layout>
            <Header>
                Welcome to chats!
            </Header>
            <Content>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Card title="Chat #1">
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card title="Chat #2">
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Space>
            </Content>
            <Footer>
                Footer here
            </Footer>
        </Layout>
    );
}

export default App;
