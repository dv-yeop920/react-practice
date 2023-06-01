import React from 'react';
import { useState } from 'react';
import {Outlet} from 'react-router-dom';
import shoesData from './data.js';

const ShoppingDetail = () => {
    const [shoes] = useState(shoesData);
    return (
        <>
        {
            shoes.map((item , i) => {
                return(
                    <div class="col">
                        <div>
                        <img src={shoes[i].image} alt=''/>
                        <h4>{shoes[i].title}</h4>
                        <p>{shoes[i].price}</p>
                        </div>
                    </div>
                )
            })
        }
            <Outlet></Outlet>
        </>
    );
};

export default ShoppingDetail;