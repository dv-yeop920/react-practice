import React from 'react';


const ShoppingWatch = () => {
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
                    watchList.map((item , i) => {
                        return(
                            <div className='col' key={i}>
                                <div>
                                    <img
                                    className='product'
                                    src={item.image}
                                    alt=''/>
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ShoppingWatch;