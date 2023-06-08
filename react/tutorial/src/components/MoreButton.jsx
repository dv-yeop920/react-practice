import React from 'react';

const MoreButton = ({more}) => {
    
    return (
        <>
            <div className='btn-box'>
            <button 
            className='button'
            onClick={() => {more()}}>
            더 보기
            </button>
        </div>
        </>
    );
};

export default MoreButton;