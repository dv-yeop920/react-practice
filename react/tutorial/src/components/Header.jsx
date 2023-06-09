import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Container , Nav} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    return (
        <>
        <Navbar bg='light' variant='light'>
            <Container>
                <Navbar.Brand onClick = {() => {navigate('/')}}>Shop</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={() => {navigate('/detail')}}>Input</Nav.Link>
                        <Nav.Link onClick={() => {navigate('/info')}}>Info</Nav.Link>
                        <Nav.Link onClick={() => {navigate('/cart')}}>cart</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;