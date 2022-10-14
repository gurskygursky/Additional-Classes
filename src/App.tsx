import React from 'react';
import './App.css';
import {Header} from './site/Header';
import {Body} from './site/Body';
import {Footer} from './site/Footer';

function App() {
    return (
        <>
            <Header title={'Header Component'}/>
            <Body title={'Body Component'}/>
            <Footer title={'Footer Component'}/>
        </>
    );
}

export default App;
