import React from 'react';
import {useNavigate, Outlet, useParams} from 'react-router-dom';
import ShoppingTab from './ShoppingTab';

const ShoppingDetail = ({shoes}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    return (
        <>
        <Outlet></Outlet>
        <div class="col">
            <div>
                <img src={shoes[id].image} alt=''/>
                <h4>{shoes[id].title}</h4>
                <p>{shoes[id].price}</p>
                <button 
                onClick={() =>{navigate('buy')}}
                type="button"
                className="btn btn-secondary">구매 하기
                </button>
            </div>
        </div>
        <ShoppingTab/>
        </>
    )
};

export default ShoppingDetail;