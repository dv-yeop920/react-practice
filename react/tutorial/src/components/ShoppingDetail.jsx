import React from 'react';
import {useNavigate, Outlet, useParams} from 'react-router-dom';

const ShoppingDetail = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    return (
        <>
                    <div class="col">
                        <div>
                        <img src={props.shoes[id].image} alt=''/>
                        <h4>{props.shoes[id].title}</h4>
                        <p>{props.shoes[id].price}</p>
                        <button 
                        onClick={() =>{navigate('buy')}}
                        type="button"
                        class="btn btn-secondary">구매 하기</button>
                        </div>
                    </div>

            <Outlet></Outlet>
        </>
    )
};

export default ShoppingDetail;