import React from 'react';
import {useNavigate} from 'react-router-dom';



const ShoppingMain = (props) => {
    const navigate = useNavigate();
    return (
        <>
        <div className='main-bg'>
        </div>
        <div class="container">
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
                            src={props.shoes[i].image}
                            alt=''
                            onClick={() => {navigate(`/detail/${i}`)}}/>
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