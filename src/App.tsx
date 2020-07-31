import React from 'react';
import './App.css';

import { Space, Layout } from 'antd'
import 'antd/dist/antd.css'

import { observer } from "mobx-react"

import Chat from "./components/Chat/Chat";

import { ObservableChatMessages } from './storage'

interface Props {
    chatMessages: ObservableChatMessages
}

const { Header, Footer, Content } = Layout;
const chatWindowsCount = 4

@observer
class App extends React.Component<Props, object> {
    state = {
    }

    render() {
        const chatMessages: ObservableChatMessages = this.props.chatMessages

        const Chats = Array.apply(null, Array(chatWindowsCount)).map((v, k) => {
            return <Chat
                entered={chatMessages.newMessageAddedHandler}
                chatMessages={chatMessages.chatMessagesAll}
                serialNumber={k + 1}
                key={k}
            />
        })

        return (
            <Layout>
                <Header title='Welcome to chats!'>
                </Header>
                <Content>
                    <Space direction="vertical" style={{width: '100%'}}>
                        {Chats}
                    </Space>
                </Content>
                <Footer>
                    Footer here
                </Footer>
            </Layout>
        );
    }
}

export default App;
