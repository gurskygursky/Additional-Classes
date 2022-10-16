import React from 'react';
import {BanknoteType, BanknoteValueType} from './Banknotes';

type NewComponentType = {
    currentMoney: Array<BanknoteType>;
    onClickFilterHandler: (value: BanknoteValueType) => void;
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((banknote, index) => {
                    return (
                        <li key={index}>
                            <span><b>{banknote.banknote}     </b></span>
                            <span style={{fontStyle: 'italic'}}>{banknote.value}</span>
                            <span>{banknote.banknoteNumber}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickFilterHandler('RUB')}>RUB</button>
            <button onClick={() => props.onClickFilterHandler('USD')}>USD</button>
            <button onClick={() => props.onClickFilterHandler('EUR')}>EUR</button>
            <button onClick={() => props.onClickFilterHandler('ALL')}>ALL</button>
        </div>
    );
};
