import React, {useState} from 'react';
import {NewComponent} from './NewComponent';

export type BanknoteValueType = 'ALL' | 'RUB' | 'USD' | 'EUR';

export type BanknoteType = {
    banknote: string;
    value: number;
    banknoteNumber: string;
}

export const Banknotes = () => {

    const [money, setMoney] = useState<Array<BanknoteType>>([
        {banknote: 'USD', value: 100, banknoteNumber: 'a1234567890'},
        {banknote: 'USD', value: 50, banknoteNumber: 'z1234567890'},
        {banknote: 'RUB', value: 100, banknoteNumber: 'w1234567890'},
        {banknote: 'EUR', value: 100, banknoteNumber: 'e1234567890'},
        {banknote: 'USD', value: 50, banknoteNumber: 'c1234567890'},
        {banknote: 'RUB', value: 100, banknoteNumber: 'r1234567890'},
        {banknote: 'EUR', value: 50, banknoteNumber: 'x1234567890'},
        {banknote: 'RUB', value: 50, banknoteNumber: 'v1234567890'},
    ]);

    const [filter, setFilter] = useState<BanknoteValueType>('ALL');

    let currentMoney = money;
    if (filter === 'RUB') {
        currentMoney = money.filter((banknote) => banknote.banknote === 'RUB');
    }
    if (filter === 'USD') {
        currentMoney = money.filter((banknote) => banknote.banknote === 'USD');
    }
    if (filter === 'EUR') {
        currentMoney = money.filter((banknote) => banknote.banknote === 'EUR');
    }

    const onClickFilterHandler = (value: BanknoteValueType) => {
        setFilter(value);
    }

    return (
        <NewComponent currentMoney={currentMoney}
                      onClickFilterHandler={onClickFilterHandler}
        />
        // <div>
        //     <ul>
        //         {currentMoney.map((banknote, index) => {
        //             return (
        //                 <li key={index}>
        //                     <span><b>{banknote.banknote}     </b></span>
        //                     <span style={{fontStyle: 'italic'}}>{banknote.value}</span>
        //                     <span>{banknote.banknoteNumber}</span>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        //     <button onClick={() => onClickFilterHandler('RUB')}>RUB</button>
        //     <button onClick={() => onClickFilterHandler('USD')}>USD</button>
        //     <button onClick={() => onClickFilterHandler('EUR')}>EUR</button>
        //     <button onClick={() => onClickFilterHandler('ALL')}>ALL</button>
        // </div>
    );
};

