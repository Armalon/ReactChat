import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from "./components/Hello";

import { Space, Card } from 'antd'
import 'antd/dist/antd.css'

function App() {
    return (
        <div className="App">
            <Hello
                name="Aleksey"
                enthusiasmLevel={10} />

            <Space direction="vertical">
                <Card title="Chat #1" style={{ width: 500 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Chat #2" style={{ width: 500 }}>
                <p>Card content</p>
                <p>Card content</p>
                </Card>
            </Space>
        </div>
    );
}

export default App;
