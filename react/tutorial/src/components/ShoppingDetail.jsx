import React from 'react';
import {Outlet} from 'react-router-dom';

const ShoppingDetail = (props) => {
    return (
        <>
        {
            props.shoes.map((item , i) => {
                return(
                    <div class="col">
                        <div>
                        <img src={props.shoes[i].image} alt=''/>
                        <h4>{props.shoes[i].title}</h4>
                        <p>{props.shoes[i].price}</p>
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