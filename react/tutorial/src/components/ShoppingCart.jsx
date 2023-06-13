import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {addCount , subtractCount , removeUserList} from '../store/userSlice.js';

const ShoppingCart = () => {
    const user = useSelector((state) => {return state.user});
    const dispatch = useDispatch();
    return (
        <>
        <Table>
            <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>수량 변경하기</th>
                <th>삭제</th>
            </tr>
            </thead>
            <tbody>
                {
                    user.map((user) => {
                        return(
                            <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.count}</td>
                            <td>
                                <button
                                onClick={() => {
                                    dispatch(addCount(user.id));
                                }}>
                                    +
                                </button>
                                <button
                                onClick={() => {
                                    dispatch(subtractCount(user.id));
                                }}>
                                    -
                                </button>
                            </td>
                            <td>
                                <button
                                onClick={() => {
                                    dispatch(removeUserList(user.id))
                                }}>
                                    삭제
                                </button>
                            </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table> 
        </>
    );
};

export default ShoppingCart;