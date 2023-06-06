import React from 'react';
import './App.css';
import {Navbar , Container , Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingDetail from './components/ShoppingDetail';
import ShoppingInfo from './components/ShoppingInfo';
import ShoppingMain from './components/ShoppingMain';
import shoesData from './components/data.js';
import BuyModal from './components/BuyModal';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';


const AppShopping = () => {
    const [shoes , setShoes] = useState(shoesData);
    const navigate = useNavigate();
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand onClick = {() => {navigate('/')}}>Shop</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
                <Nav.Link onClick={() => {navigate('/detail')}}>Menu</Nav.Link>
                <Nav.Link onClick={() => {navigate('/info')}}>Info</Nav.Link>
            </Nav>
            </Container>
        </Navbar>

    <Routes>
        <Route path='/' element = {<ShoppingMain shoes = {shoes}/>} />
        <Route path='/detail/:id' element = {<ShoppingDetail shoes = {shoes} />}>
            <Route path='buy' element = {<BuyModal/>}/>
        </Route>
        <Route path='/info' element = {<ShoppingInfo/>}/>
        <Route path='*' element = {<div>404</div>}/>
    </Routes>
        </>
    );
};

export default AppShopping;