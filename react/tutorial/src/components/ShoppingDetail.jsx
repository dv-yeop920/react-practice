import React from 'react';
import {useNavigate, Outlet, useParams} from 'react-router-dom';
import ShoppingTab from './ShoppingTab';
import {addUserList} from '../store/userSlice.js';
import {useDispatch} from 'react-redux';

const ShoppingDetail = ({shoes}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const selectedShoes = shoes.find((item) => item.id === parseInt(id));
    return (
        <>
        <Outlet></Outlet>
        <div class="col">
            <div>
                <img src={selectedShoes.image} alt=''/>
                <h4>{selectedShoes.title}</h4>
                <p>{selectedShoes.price}</p>
                <button 
                onClick={() =>{
                    navigate('/cart');
                    dispatch(
                        addUserList(
                            {
                                id : selectedShoes.id,
                                name : selectedShoes.title,
                                count : 1
                            })
                        )
                }}
                type="button"
                className="btn btn-secondary">
                    구매 하기
                </button>
            </div>
        </div>
        <ShoppingTab/>
        </>
    )
};

export default ShoppingDetail;