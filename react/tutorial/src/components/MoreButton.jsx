import React from 'react';

const MoreButton = ({more , setMoreCount}) => {
    
    return (
        <>
            <div className='btn-box'>
            <button 
            className='button'
            onClick={() => {
                more()
                setMoreCount(prev => prev + 1)}}>
            더 보기
            </button>
        </div>
        </>
    );
};

export default MoreButton;