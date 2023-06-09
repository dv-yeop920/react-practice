import React from 'react';

const ShoppingTabDetail = ({tabSwitch}) => {
    return (
        <>
            {
                tabSwitch === 0 && (
                    <div>첫번째 페이지 입니다</div>
                )
            }
            {
                tabSwitch === 1 && (
                    <div>두번째 페이지 입니다</div>
                )
            }
            {
                tabSwitch === 2 && (
                    <div>세번째 페이지 입니다</div>
                )
            }
        </>
    );
};

export default ShoppingTabDetail;