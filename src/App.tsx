import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";

function App() {
    return (
        <div className="App">
            <Hello name="hhaha" year={2002}/>
            <Hello name="hihihi"/>
        </div>
    );
}// sao no add nhieeu du
// do luc nay no cai ve nhieu lam
export default App;
