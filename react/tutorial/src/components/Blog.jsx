import React, { useState } from 'react';

const Blog = () => {
    const [title , setTitle] = useState(['암거나' , 'ㅋㅋㅋ' , 'ㅎㅎㅎㅎ']);
    const [count , setCount] = useState(0);
    const [heart , setHeart] = useState('🤍')
    
    return (
        <div>
            <div className='list'>
                <h4>{title[0]}
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
                </h4>
                <p>2023.05.17</p>
            </div>
        </div>
    );
};

export default Blog;