import {computed, observable} from "mobx";
import { ChatMessage } from "./components/Chat/Chat";


export class ObservableChatMessages {
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
    }
}

const observableChatMessages = new ObservableChatMessages()

export default observableChatMessages