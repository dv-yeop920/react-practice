import React from 'react';
import { useState , useEffect } from 'react';

const Counter = () => {
    const [count , setCount] = useState(5);
    const [counter, setCounter] = useState(true);
    useEffect(() => {
        let interval = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);
         // 카운터가 0초가 되면 clearInterval로 interval을 정리하고 카운터를 숨깁
        if(count === 0) {
            clearInterval(interval);
            setCounter(false);
        }
        // 컴포넌트가 언마운트될 때 interval을 정리.
        return () => clearInterval(interval);
        },[count]);
    //React Hook useEffect에는 'setCounter'에 대한 호출이 포함되어 있습니다. 종속성 목록이 없으면 무한 업데이트 체인으로 이어질 수 있다. 이 문제를 해결하려면 [count]를 useEffect Hook의 두 번째 인수로 전달 한다.
    return (
        <>
        {
        counter && (
                <div 
                    className='counter'
                    style={{backgroundColor:'black',color:'white',height:'50px',fontSize:'20px'}}
                >
                    {count}초 뒤 사라집니다
                </div>
            )
        }
        </>
    );
};

export default Counter;