import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ShoppingInput = () => {
    const [userInputValue , setUserInputValue] = useState('');
    useEffect(() => {
        //숫자나 빈 문자열이 아니라면
        if(/[/^$|\D+/]/.test(userInputValue)) {
            alert('숫자만 입력바람');
            setUserInputValue('');
        }
    },[userInputValue]);

    return (
        <>
        <input 
        onChange={(e) => {setUserInputValue(e.target.value)}}
        value = {userInputValue}
        type="text"
        placeholder='입력...'/>
        </>
    );
};

export default ShoppingInput;