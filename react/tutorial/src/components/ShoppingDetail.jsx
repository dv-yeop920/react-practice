import React from 'react';
import {useNavigate, Outlet, useParams} from 'react-router-dom';
import ShoppingTab from './ShoppingTab';
import {addUserList} from '../store/userSlice.js';
import {useDispatch} from 'react-redux';

const ShoppingDetail = ({shoes}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    return (
        <>
        <Outlet shoes = {shoes}></Outlet>
        <div class="col">
            <div>
                <img src={shoes[id].image} alt=''/>
                <h4>{shoes[id].title}</h4>
                <p>{shoes[id].price}</p>
                <button 
                onClick={() =>{
                    navigate('/cart');
                    dispatch(addUserList({id : shoes[id].id, name : shoes[id].title, count : 1}))
                }}
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