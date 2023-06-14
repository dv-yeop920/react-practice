import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { addWachList, setLocalStorage } from '../store/local';
import Counter from './Counter';





const ShoppingMain = ({shoes}) => {
    const selectList = ['선택', '낮은 가격순', '높은 가격순', '알파벳순'];
    const [selected, setSelected] = useState('');
    const viewByFilter = (e) => {
        if(e === '낮은 가격순') {
            shoes.sort((a,b) => {
                return a.price - b.price;
            });
        }
        if(e === '높은 가격순') {
            shoes.sort((a,b) => {
                return b.price - a.price;
            });
        }
        if(e === '알파벳순') {
            shoes.sort((a,b) => {
                return a.title.localeCompare(b.title);
            });
        }
    }

    const handleSelect = (e) => {
        setSelected(e.target.value);
        viewByFilter(e.target.value);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
        <Counter/>
        <div className='main-bg'></div>
        <div class="container">
            <div className='select'>
                    <select onChange={handleSelect} value={selected}>
                    {selectList.map((item) => (
                        <option
                        value={item} 
                        key={item}>
                        {item}
                        </option>
                    ))}
                    </select>
                </div>
            <div 
            className='shoes-list-container'
            style={{display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '10px',textAlign:'center' 
            }}>

                {
                    shoes.map((item , i) => {
                        return(
                            <>
                            <div className='col' key={i}>
                                <div>
                                    <img
                                    className='product'
                                    onClick={() => {
                                        navigate(`/detail/${item.id}`);
                                        dispatch(addWachList(
                                            {
                                                id : item.id,
                                                image : item.image,
                                                name : item.title,
                                                price : item.price,
                                                count : item.count
                                            }
                                        ));
                                        dispatch(setLocalStorage());
                                    }}
                                    src={item.image}
                                    alt=''/>
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
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

export default ShoppingMain;