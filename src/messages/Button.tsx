import React from 'react';

type ButtonPropsType = {
    title: string;
    callbackHandler: () => void;
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callbackHandler();
    }

    return (
        <button onClick={onClickHandler}>{props.title}</button>
    );
}