import React, {useState} from 'react';

export const HookUseState = () => {

    const [value, setValue] = useState<number>(0);

    const onClickHandler = () => {
        setValue(value + 1);
        console.log(value);
    }

    const onClickResetHandler = () => {
        setValue(0);
        console.log(value);
    }

    return (
        <div>
            <h1>
                {value}
            </h1>
            <button onClick={onClickHandler}>INC</button>
            <button onClick={onClickResetHandler}>RESET</button>
        </div>
    );
};
