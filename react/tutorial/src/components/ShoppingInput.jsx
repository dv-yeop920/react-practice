import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ShoppingInput = () => {
    const [userInputValue , setUserInputValue] = useState('');
    useEffect(() => {
        !/[0-9]/.test(userInputValue) && alert('숫자만 입력바람');
    },[userInputValue]);
    //useEffect 써서 숫자만 입력할수 있게 하고  그 이외의 문자 입력하면 alert 띄우기
    return (
        <>
        <input 
        onChange={(e) => {setUserInputValue(e.target.value)}}
        type="text"
        placeholder='입력...'/>
        </>
    );
};

export default ShoppingInput;