import React from 'react';
import { useEffect , useState } from 'react';
import {useNavigate} from 'react-router-dom';



const ShoppingMain = (props) => {

    const navigate = useNavigate();
    const selectList = ['선택', '낮은 가격순', '높은 가격순', '알파벳순'];
    const [count , setCount] = useState(5);
    const [counter, setCounter] = useState(true);
    const [selected, setSelected] = useState('');
    
    const viewByFilter = (e) => {
        const sortedShoes = [...props.shoes];
        if(e === '낮은 가격순') {
            props.shoes.sort((a,b) => {
                return a.price - b.price;
            });
        }
        if(e === '높은 가격순') {
            props.shoes.sort((a,b) => {
                return b.price - a.price;
            });
        }
        if(e === '알파벳순') {
            props.shoes.sort((a,b) => {
                return a.title.localeCompare(b.title);
            });
        }
        props.setShoes(sortedShoes);
    }

    const handleSelect = (e) => {
        setSelected(e.target.value);
        viewByFilter(e.target.value);
    };

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
        //React Hook useEffect에는 'setCounter'에 대한 호출이 포함되어 있습니다. 종속성 목록이 없으면 무한 업데이트 체인으로 이어질 수 있습니다. 이 문제를 해결하려면 [count]를 useEffect Hook의 두 번째 인수로 전달합니다.

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