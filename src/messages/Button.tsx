import React from 'react';

type ButtonPropsType = {
    handleInputValue: string;
    sendMessage: (inputValue: string) => void;
    setHandleInputValue: (inputValue: string) => void;
}

export const Button = (props: ButtonPropsType) => {

    const onClickSendMessageHandler = () => {
        props.sendMessage(props.handleInputValue);
        props.setHandleInputValue('');
    }

    return (
        <button onClick={onClickSendMessageHandler}>+</button>
    );
}