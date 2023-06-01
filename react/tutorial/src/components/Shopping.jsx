import React from 'react';
import { useState } from 'react';
import shoesData from './data.js';


const Shopping = () => {
    const [shoes] = useState(shoesData);
    return (
        <>
        <div className='main-bg'>
        </div>
        <div class="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '10px',textAlign:'center' }}>
            {
                shoes.map((item , i) => {
                    return(
                        <>
                        <div class="col">
                            <div>
                            <img src={shoes[i].image} alt=''/>
                            <h4>{shoes[i].title}</h4>
                            <p>{shoes[i].price}</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </div>
        </>
    );
};

export default Shopping;