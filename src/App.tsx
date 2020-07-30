import React from 'react';
import './App.css';
import 'antd/dist/antd.css'

import Chat, { ChatMessage } from "./components/Chat/Chat";
// import { SearchProps } from "antd/es/input/Search";

import { Space } from 'antd'
import { Layout } from 'antd';

import { observer } from "mobx-react"
import { observable, computed } from 'mobx'

const { Header, Footer, Content } = Layout;

// todo: move to the config
const chatWindowsCount = 4

@observer
class App extends React.Component {
    // todo: put in a MobX state
    // and make it reactive
    state = {
        //  Array <ChatMessage> =
    }

    @observable
    chatMessages: Array<ChatMessage> = [
        {
            userName: 'user #1',
            text: 'Init message'
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

    @computed get chatMessagesAll():Array<ChatMessage> {
        return [...this.chatMessages]
    }

    newMessageAddedHandler = (value: string, chatNumber: number) => {
        this.chatMessages.push({
            userName: `user #${chatNumber}`,
            text: value
        })

        // const chatMessages = [...this.state.chatMessages]
        // chatMessages.push({
        //     userName: `user #${chatNumber}`,
        //     text: value
        // })
        // this.setState({
        //     chatMessages
        // })
    }

    render() {
        const Chats = Array.apply(null, Array(chatWindowsCount)).map((v, k) => {
            return <Chat
                entered={this.newMessageAddedHandler}
                chatMessages={this.chatMessagesAll}
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
