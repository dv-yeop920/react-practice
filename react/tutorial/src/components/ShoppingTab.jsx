import React from 'react';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import ShoppingTabDetail from './ShoppingTabDetail';
const ShoppingTab = () => {
    const [tabSwitch , setTabSwitch] = useState(0);
    const handleClickTabButton = (e) => {
        switch(e.target.id){
            case 'tab0':
                setTabSwitch(0);
                break;
            case 'tab1':
                setTabSwitch(1);
                break;
            case 'tab2':
                setTabSwitch(2);
                break;
            default:
                setTabSwitch(0);
        }
    }
    return (
        <>
        <Nav variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
                <Nav.Link
                id = 'tab0'
                onClick={(e) => {handleClickTabButton(e)}} 
                eventKey='link-0'>
                    Active
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                id = 'tab1' 
                onClick={(e) => {handleClickTabButton(e)}}
                eventKey='link-1'>
                    Option 2
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                id = 'tab2' 
                onClick={(e) => {handleClickTabButton(e)}}
                eventKey='link-2'>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
        <ShoppingTabDetail tabSwitch = {tabSwitch}/>
        </>
    );
};

export default ShoppingTab;