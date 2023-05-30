import React from 'react';
import {Button , Navbar , Container , Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Shopping = () => {
    return (
        <div>
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Menu</Nav.Link>
                <Nav.Link href="#pricing">Info</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <div className='main-bg'></div>
        <div className='container'>
            <div className='menu-column'>
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width='90%'/>
                <h4>상품명</h4>
                <p>가격</p>
            </div>
            <div className='menu-column'>
                <img src="https://codingapple1.github.io/shop/shoes2.jpg" width='90%'/>
                <h4>상품명</h4>
                <p>가격</p>
            </div>
            <div className='menu-column'>
                <img src="https://codingapple1.github.io/shop/shoes3.jpg" width='90%'/>
                <h4>상품명</h4>
                <p>가격</p>
            </div>
        </div>
        </div>
    );
};

export default Shopping;