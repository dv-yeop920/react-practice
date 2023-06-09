import React from 'react';

const ShoppingTabDetail = (props) => {
    return (
        <>
            {
                props.tabSwitch === 0 && (
                    <div>첫번째 페이지 입니다</div>
                )
            }
            {
                props.tabSwitch === 1 && (
                    <div>두번째 페이지 입니다</div>
                )
            }
            {
                props.tabSwitch === 2 && (
                    <div>세번째 페이지 입니다</div>
                )
            }
        </>
    );
};

export default ShoppingTabDetail;