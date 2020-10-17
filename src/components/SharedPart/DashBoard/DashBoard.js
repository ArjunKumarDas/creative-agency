import React from 'react';
import './DashBoard.css';
import { Col, Container, Row } from 'react-bootstrap';
import CustomerFrom from '../../PlaceOrderPage/PlaceOrder/CustomerFrom/CustomerFrom';

const DashBoard = () => {
    return (
        <>
            <Row>
                <div className="col-md-2 bg-light">dbuiwfhwufw</div>
                <div className="col-md-9 bg-color"><CustomerFrom></CustomerFrom></div>
            </Row>
        </>
    );
};

export default DashBoard;