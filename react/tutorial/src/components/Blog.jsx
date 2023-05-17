import React, { useState } from 'react';

const Blog = () => {
    let [title , setTitle] = useState(['암거나' , 'ㅋㅋㅋ' , 'ㅎㅎㅎㅎ']);
    return (
        <div>
            <div className='list'>
                <h4>{title[0]}</h4>
                <p>2023.05.17</p>
            </div>
            <div className='list'>
                <h4>{title[1]}</h4>
                <p>2023.05.17</p>
            </div>
            <div className='list'>
                <h4>{title[2]}</h4>
                <p>2023.05.17</p>
            </div>
        </div>
    );
};

export default Blog;