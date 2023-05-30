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
            addTitle.unshift(userInputValue);
            addHeart.unshift('🤍');
            addCount.unshift(0);
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
            <button id='input-button' 
            onClick ={handleInput}>
                submit
            </button>
        </form>

        {
            title.map((item , i) => {
                const handleClickHeartButton = () => {
                    let titleCopy = [...title];
                        titleCopy[i] = 'Wow';
                        setTitle(titleCopy);
                        let countCopy = [...count];
                        countCopy[i] += 1;
                        setCount(countCopy);
                        let heartCopy = [...heart];
                        heartCopy[i] = '❤️';
                        setHeart(heartCopy);
                }
                const handleClickRemoveButton = () => {
                    let removeTitle = [...title];
                    let removeHeart = [...heart];
                    let removeCount = [...count];
                    removeTitle.splice(i , 1);
                    removeHeart.splice(i , 1);
                    removeCount.splice(i , 1);
                    setTitle([...removeTitle]);
                    setHeart([...removeHeart]);
                    setCount([...removeCount]);
                }
                return(
                    
                    <div className='list' key={i}>
                        <h4 onClick={() => {
                            modal === false ? setModal(true) : setModal(false);
                            setCloneTitle(i);
                        }}>
                        {title[i]}
                            <button 
                            clasName ='heart-button'
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClickHeartButton();
                            }}>
                                {heart[i]}
                            </button>
                            <span>
                                {count[i]}
                            </span>
                        </h4>
                    <span>2023.05.17</span>
                    <button onClick={handleClickRemoveButton}>삭제</button>
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