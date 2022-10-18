import React, {useState} from 'react';
import {InputButton} from './InputButton';
import {Input} from './Input';
import {Button} from './Button';

type MessageType = {
    message: string;
}
export const Messages = () => {

    const [messages, setMessages] = useState<Array<MessageType>>([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'},
        ],
    );

    const [handleInputValue, setHandleInputValue] = useState<string>('');


    const sendMessage = (message: string) => {
        setMessages([{message}, ...messages]);
    }

    const sendMessageCallback = () => {
        sendMessage(handleInputValue);
        setHandleInputValue('');
    }

    return (
        <div>
            <InputButton sendMessage={sendMessage}/>
            <Input handleInputValue={handleInputValue}
                   setHandleInputValue={setHandleInputValue}
            />
            <Button title={'Send'} callbackHandler={sendMessageCallback}/>
            <ul>
                {messages.map((message: MessageType, index) => <li key={index}>
                    {message.message}
                </li>)}
            </ul>
        </div>
    );
};
