import React, { useState } from 'react';

const Blog = () => {
    const [title , setTitle] = useState(['첫번째' , '두번째' , '세번째' , '네번째']);
    const [cloneTitle , setCloneTitle] = useState(0);
    const [count , setCount] = useState([0,0,0,0]);
    const [heart , setHeart] = useState(['🤍','🤍','🤍','🤍'] );
    const [modal , setModal] = useState(false);
    const [userInputValue , setUserInputValue] = useState('');
    
    const handleInput = () => {
        if(userInputValue === '') {
            return;
        }
            let addTitle = [...title];
            let addHeart = [...heart];
            let addCount = [...count];
            addTitle.push(userInputValue);
            addHeart.push('🤍');
            addCount.push(0);
            setTitle([...addTitle]);
            setHeart([...addHeart]);
            setCount([...addCount]);
            setUserInputValue('');
    }
    return (
        <>
        <form className='form-container' onSubmit={(e) => {
            e.preventDefault();
        }}>
            <input type="text" 
            value={userInputValue}
            placeholder='입력...' 
            onChange={(e) => {
                setUserInputValue(e.target.value);
                console.log(userInputValue);
                }}/>
            <button id='input-button' onClick ={(e) => {
                handleInput();
            }}>submit</button>
        </form>

        {
            title.map((item , i) => {
                return(
                    
                    <div className='list' key={i}>
                        <h4 onClick={() => {
                            modal === false ? setModal(true) : setModal(false);
                            setCloneTitle(i);
                        }}>
                        {title[i]}
                            <button onClick={(event) => {
                                event.stopPropagation();
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
                            <span>
                                {count[i]}
                            </span>
                        </h4>
                    <span>2023.05.17</span>
                    <button onClick={(e) => {
                    }}>삭제</button>
                    
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