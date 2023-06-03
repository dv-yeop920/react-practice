import React from 'react';
import {useNavigate, Outlet} from 'react-router-dom';

const ShoppingDetail = (props) => {
    const navigate = useNavigate();
    return (
        <>
                    <div class="col">
                        <div>
                        <img src={props.shoes[0].image} alt=''/>
                        <h4>{props.shoes[0].title}</h4>
                        <p>{props.shoes[0].price}</p>
                        <button 
                        onClick={() =>{navigate('own')}}
                        type="button"
                        class="btn btn-secondary">구매 하기</button>
                        </div>
                    </div>

            <Outlet></Outlet>
        </>
    )
};

export default ShoppingDetail;