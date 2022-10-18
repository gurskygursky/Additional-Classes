import React, {ChangeEvent} from 'react';

type InputPropsType = {
    handleInputValue: string;
    setHandleInputValue: (inputValue: string) => void
}
export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setHandleInputValue(event.currentTarget.value);
    }

    return (
        <input style={{border: 'solid', marginTop: '10px'}} type={'text'}
               value={props.handleInputValue}
               onChange={onChangeInputHandler}
        />
    );
}