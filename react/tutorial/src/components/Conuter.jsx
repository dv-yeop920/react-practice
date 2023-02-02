import React from 'react';

const Conuter = ({onClick , onClick2, total ,total2}) => {
    return (
        <div>
            <div className='App-counter'>
            <div className='counter-box'>
                <h1 className='number'>{total}</h1>
                <button 
                className='button'
                onClick={onClick}>+</button>
            </div>
            
            <div className='counter-box'>
                <h1 className='number'>{total2}</h1>
                <button 
                className='button'
                onClick={onClick2}>+</button>
            </div>
            </div>
        </div>
    );
};

export default Conuter;