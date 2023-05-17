import React, { useState } from 'react';
import TicTecToe from './TicTecToe';
import '../App.css';


const AppTicTecToe = () => {
    const [xIsNext , setXIsNext] = useState(true);
    const [value , setValue] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        const nextValue = value.slice();
        if(value[i]){
            return;
        }
        if(xIsNext){
            nextValue[i] = 'X';
        }else {
            nextValue[i] = 'O'
        }
        setValue(nextValue);
        setXIsNext(!xIsNext);
    }

    const TicTecToeWinner = (value) => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (value[a] && value[a] === value[b] && value[a] === value[c]) {
            return value[a];
            }
        }
        return null;
    };

    const winner = TicTecToeWinner(value);
    let status;
    if(winner) {
        status = `승자는 ${winner} 입니다 ! 새로고침해서 새로운게임 진행해 주세요!`;
        

    }else {
        status = `다음 플레이어: ${xIsNext ? 'x':'O'}`;
    }
    
    return (
        <>
        <div className='status'>{status}</div>
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