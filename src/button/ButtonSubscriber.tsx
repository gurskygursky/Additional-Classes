import React from 'react';

export const ButtonSubscriber = () => {

    const myFirstSubscriber = () => {
        console.log('first subscribe');
    }

    const mySecondSubscriber = () => {
        console.log('second subscribe');
    }

    const onClickHandlerName = (subscriberName: string) => {
        console.log(subscriberName);
    }

    const func1 = () => {
        console.log(100200);
    }

    const func2 = (buttonValue: number ) => {
        console.log(buttonValue);
    }

    return (
        <div>
            {/*<button onClick={(event) => {}}>MyYoutubeChanel-1</button>*/}
            <button onClick={myFirstSubscriber}>MyYoutubeChanel-1</button>
            <button onClick={mySecondSubscriber}>MyYoutubeChanel-2</button>
            <button onClick={() => onClickHandlerName('SubscriberName')}>MyYoutubeChanel-3</button>

            <button onClick={func1}>one</button>
            <button onClick={() => func2(100200)}>two</button>
        </div>
    );
};
