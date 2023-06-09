import React from 'react';
import './App.css';
import shoesData from './components/data.js';
import Header from './components/Header';
import ShoppingMain from './components/ShoppingMain';
import MoreButton from './components/MoreButton';
import ShoppingDetail from './components/ShoppingDetail';
import ShoppingInput from './components/ShoppingInput';
import ShoppingInfo from './components/ShoppingInfo';
import BuyModal from './components/BuyModal';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import ShoppingCart from './components/ShoppingCart';



const AppShopping = () => {
    const [shoes , setShoes] = useState(shoesData);
    const [moreCount , setMoreCount] = useState(2);
    const moreShoes =  () => {
        axios.get(`https://codingapple1.github.io/shop/data${moreCount}.json`)
        .then((result) => {
            const newShoes = [...shoes,...result.data];
            console.log(newShoes);
            setShoes(newShoes);
        })
        .catch(() => {console.log('요청 실패')});
    }
    
    return (
        <>
        <Header/>
        <Routes>
            <Route 
            path='/' 
            element = {[
            <ShoppingMain shoes = {shoes}/>,
            <MoreButton more = {moreShoes} setMoreCount = {setMoreCount}/>
            ]}/>
            <Route path='/detail/:id' element = {<ShoppingDetail shoes = {shoes}/>}>
                <Route path='buy' element = {<BuyModal/>}/>
            </Route>
            <Route path='/detail' element={<ShoppingInput/>} />
            <Route path='/info' element = {<ShoppingInfo/>} />
            <Route path='/cart' element={<ShoppingCart/>} />
            <Route path='*' element = {<div>404</div>}/>
        </Routes>
        </>
    );
};

export default AppShopping;