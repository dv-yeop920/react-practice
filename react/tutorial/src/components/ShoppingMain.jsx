import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';



const ShoppingMain = (props) => {
    const navigate = useNavigate();
    const selectList = ['선택', '낮은 가격순', '높은 가격순', '알파벳순'];
    const [selected, setSelected] = useState('');
    
    const viewByPrice = () => {
        const sortedShoes = [...props.shoes];
        props.shoes.sort((a,b) => {
            return a.price - b.price;
        });
        props.setShoes(sortedShoes);
    }
    const handleSelect = (e) => {
        setSelected(e.target.value);
        e.target.value === '낮은 가격순' && viewByPrice();
    };
    return (
        <>
        <div className='main-bg'>
        </div>

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

        <div style={{ display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '10px',textAlign:'center' }}>

            {
                props.shoes.map((item , i) => {
                    return(
                        <>
                        <div class="col">
                            <div>
                            <img
                            onClick={() => {navigate(`/detail/${i}`)}}
                            className='product'
                            src={props.shoes[i].image}
                            alt=''/>
                            <h4>{props.shoes[i].title}</h4>
                            <p>{props.shoes[i].price}</p>
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