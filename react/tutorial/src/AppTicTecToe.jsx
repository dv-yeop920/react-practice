import React, { useState } from 'react';
import TicTecToe from './components/TicTecToe';
import './App.css';

const AppTicTecToe = () => {
    const [xIsNext , setXIsNext] = useState(true);
    const [value , setValue] = useState(Array(9).fill(null));
    const handleClick = (i) => {
        const nextValue = value.slice();
        if(value[i]){
            return;
        }
        if(xIsNext){
            nextValue[i] = 'x';
        }else {
            nextValue[i] = 'O'
        }
        setValue(nextValue);
        setXIsNext(!xIsNext);
    }
    return (
        <>
        <div className='board'>
            <TicTecToe value = {value[0]} onClick = {() => handleClick(0)}/>
            <TicTecToe value = {value[1]} onClick = {() => handleClick(1)}/>
            <TicTecToe value = {value[2]} onClick = {() => handleClick(2)}/>
        </div>
        <div className='board'>
            <TicTecToe value = {value[3]} onClick = {() => handleClick(3)}/>
            <TicTecToe value = {value[4]} onClick = {() => handleClick(4)}/>
            <TicTecToe value = {value[5]} onClick = {() => handleClick(5)}/>
        </div>
        <div className='board'>
            <TicTecToe value = {value[6]} onClick = {() => handleClick(6)}/>
            <TicTecToe value = {value[7]} onClick = {() => handleClick(7)}/>
            <TicTecToe value = {value[8]} onClick = {() => handleClick(8)}/>
        </div>
        </>
        
    );
};

export default AppTicTecToe;