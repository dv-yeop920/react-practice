import React from 'react';
import {Navbar , Container , Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoesData from './ShoesData.jsx';


const Shopping = () => {
    return (
        <>
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
        <div className='main-bg'>
        </div>
        <div class="container"> 
            <ShoesData/>
        </div>
        </>
    );
};

export default Shopping;