import React, { useState } from 'react';

const Blog = () => {
    const [title , setTitle] = useState(['첫번째' , '두번째' , '세번째' , '네번째']);
    const [cloneTitle , setCloneTitle] = useState(0);
    const [count , setCount] = useState([0,0,0,0]);
    const [heart , setHeart] = useState(['🤍','🤍','🤍','🤍'] );
    const [modal , setModal] = useState(false);
    
    return (
        <>
        {
            title.map((item , i) => {
                return(
                    <div className='list' key={i}>
                        <h4 onClick={() => {
                            modal === false ? setModal(true) : setModal(false);
                            setCloneTitle(i);
                        }}>{title[i]}
                        </h4>
                    <div>
                        <button onClick={() => {
                            let titleCopy = [...title];
                            titleCopy[i] = 'Wow';
                            setTitle(titleCopy);
                            let countCopy = [...count];
                            countCopy[i] += 1;
                            setCount(countCopy);
                            let heartCopy = [...heart];
                            heartCopy[i] = '❤️';
                            setHeart(heartCopy);
                        }}>
                            {heart[i]}
                        </button>
                        <p>
                        {count[i]}
                        </p>
                    </div>
                    <p>2023.05.17</p>
                    </div>
                )
            })
        }
        {modal === true ? <Modal 
        cloneTitle = {cloneTitle}
        edit = {setTitle} 
        title = {title}/> : null}
        </>
    );
};

const Modal = (props) => {
    return(
        <div className="modal">
            <h4>{props.title[props.cloneTitle]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                let newTitle = [...props.title];
                newTitle[props.cloneTitle] = 'asddsasdsad';
                props.edit(newTitle);
            }}>글 수정</button>
        </div>
    );
};



export default Blog;