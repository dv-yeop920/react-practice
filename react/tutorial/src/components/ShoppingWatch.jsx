import React from 'react';
import { useNavigate } from 'react-router-dom';


const ShoppingWatch = () => {
    const navigate = useNavigate();
    const getWatchList = localStorage.getItem('watchedMenu');
    const watchList = JSON.parse(getWatchList);
    return (
        <>
            <div 
            className='shoes-list-container'
            style={{display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '10px',textAlign:'center' 
            }}>
                {
                    watchList ?
                    watchList.map((item , i) => {
                        return(
                            <div className='col' key={i}>
                                <div>
                                    <img
                                    onClick={() => navigate(`/detail/${item.id}`)}
                                    className='product'
                                    src={item.image}
                                    alt=''/>
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        )
                    })
                    : <div>아직 본 상품이 없습니다</div>
                }
            </div>
        </>
    );
};

export default ShoppingWatch;