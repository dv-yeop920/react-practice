import React, { useState } from 'react';
import './App.css';
import Conuter from './components/Conuter';


const AppCounter = () => {
    const [count , setCount] = useState(0);
    const [count2 , setCount2] = useState(0);
    return (
        <div>
            <div className='total-counter'>
                <span className='total-counter'>
                    {`total:${count + count2}`}
                    {}
                </span>
            </div>
            <Conuter
            onClick = {() => setCount(prev => prev + 1)}
            onClick2 = {() => setCount2(prev => prev + 1)}
            total = {count}
            total2 = {count2}
            />

        </div>
    );
};

export default AppCounter;