import React, {ChangeEvent, useState} from 'react';

type InputButtonType = {
    sendMessage: (inputValue: string) => void;
}

export const InputButton = (props: InputButtonType) => {

    const [handleInputValue, setHandleInputValue] = useState<string>('');


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setHandleInputValue(event.currentTarget.value);
    }

    const onClickSendMessageHandler = () => {
        props.sendMessage(handleInputValue);
        setHandleInputValue('');
    }


    return (
        <div style={{marginTop: '10px'}}>
            <input type={'text'}
                   value={handleInputValue}
                   onChange={onChangeInputHandler}
            />
            <button onClick={onClickSendMessageHandler}>+</button>
        </div>
    );
}