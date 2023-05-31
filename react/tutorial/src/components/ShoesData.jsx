import React from 'react';
import { useState } from 'react';
import shoesData from './data.js';

const ShoesData = () => {
    const [shoes , setShoes] = useState(shoesData);
    return (
        <div>
            {
                shoes.map((item , i) => {
                    return(
                        <div className='menu-column'>
                            <div className='img-box'>
                            <img src={shoes[i].image} width='90%'/>
                            </div>
                            <h4>{shoes[i].title}</h4>
                            <p>{shoes[i].price}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ShoesData;