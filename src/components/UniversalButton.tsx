import React from 'react';

type UniversalButtonType = {
    title: string;
    callbackHandler: () => void;
}

export const UniversalButton = (props: UniversalButtonType) => {

    const onClickHandler = () => {
        props.callbackHandler();
    }

    return (
        <button onClick={onClickHandler}>
            {props.title}
        </button>
    );
};
