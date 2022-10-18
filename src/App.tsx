import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';
import {StudentsComponent} from 'src/method map/StudentComponent';
import {TopCarsComponent} from './method map/TopCarsComponent';
import {ButtonSubscriber} from './button/ButtonSubscriber';
import {UniversalButton} from './components/UniversalButton';
import {HookUseState} from './hoosUseState/HookUseState';
import {Banknotes} from './banknotes/Banknotes';
import {Messages} from './messages/Messages';

export type StudentType = {
    id: number;
    name: string;
    age: number;
}

const students: Array<StudentType> = [
    {id: 1, name: 'James', age: 8},
    {id: 2, name: 'Robert', age: 18},
    {id: 3, name: 'John', age: 28},
    {id: 4, name: 'Michael', age: 38},
    {id: 5, name: 'William', age: 48},
    {id: 6, name: 'David', age: 58},
    {id: 7, name: 'Richard', age: 68},
    {id: 8, name: 'Joseph', age: 78},
    {id: 9, name: 'Thomas', age: 88},
    {id: 10, name: 'Charles', age: 98},
    {id: 11, name: 'Christopher', age: 100},
];
export type CarType = {
    manufacturer: string;
    model: string;
}
const topCars: Array<CarType> = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'},
];


function App() {

    const onClickButtonHandler = (nameSubscriber: string, age?: number) => {
        console.log(nameSubscriber, age);
    }

    const onClickStupidButtonHandler = () => {
        console.log(`I'm stupid button`);
    }

    return (
        <>
            <Header title={'Header Component'}/>
            <Body title={'Body Component'}/>
            <Footer title={'Footer Component'}/>
            <StudentsComponent students={students}/>
            <TopCarsComponent topCars={topCars}/>
            <ButtonSubscriber/>
            <UniversalButton title={'UniversalButton-1'} callbackHandler={() => onClickButtonHandler('Vasya')}/>
            <UniversalButton title={'UniversalButton-2'} callbackHandler={() => onClickButtonHandler('ne Vasya')}/>
            <UniversalButton title={'UniversalButton-age'} callbackHandler={() => onClickButtonHandler('ne Vasya', 100)}/>
            <UniversalButton title={'UniversalButton-age'} callbackHandler={() => onClickButtonHandler('ne Vasya', 10)}/>
            <UniversalButton title={'UniversalButton-stupid'} callbackHandler={onClickStupidButtonHandler}/>
            <HookUseState/>
            <Banknotes/>
            <Messages/>
        </>
    );
}

export default App;
