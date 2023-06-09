import React from 'react';

const ShoppingTabDetail = ({tabSwitch}) => {
    const tabDetailList = [<div>첫번째 페이지 입니다</div> , <div>두번째 페이지 입니다</div> , <div>세번째 페이지 입니다</div>]
    return (
        <>
        {
            tabDetailList[tabSwitch]
        }
        </>
    );
};

export default ShoppingTabDetail;