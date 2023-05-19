import React, { useState } from 'react';

const Blog = () => {
    const [title , setTitle] = useState(['암거나' , 'ㅋㅋㅋ' , 'ㅎㅎㅎㅎ']);
    const [count , setCount] = useState(0);
    const [heart , setHeart] = useState('🤍');
    const [modal , setModal] = useState(false);
    
    return (
        <div>
            <div className='list'>
                <h4 onClick={() => {
                    modal === false ? setModal(true) : setModal(false);
                }}>{title[0]}
                </h4>
                <div>
                <button onClick={() => {
                        setCount(count + 1);
                        setHeart('💖');
                        let titleCopy = [...title];
                        titleCopy[0] = 'Wow';
                        setTitle(titleCopy);
                        console.log(title === titleCopy);
                        }}>
                    {heart}
                    </button>
                    <span>
                        {count}
                    </span>
                </div>
                <p>2023.05.17</p>
            </div>
            {modal === true ? <Modal/> : null}
        </div>
    );
};

const Modal = () => {
    return(
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    );
};



export default Blog;