import React from 'react';
import { Col, Row } from 'react-bootstrap';
import NavbarTop from '../../SharedPart/NavbarTop/NavbarTop';
import Sidebar from '../../Sidebar/Sidebar';
import CustomerFrom from './CustomerFrom/CustomerFrom';
const PlaceOrder = () => {
  return (
    <div>
      <><NavbarTop></NavbarTop></>
      <Row>
         <Col className="col-md-2 sidebar-bg"><Sidebar></Sidebar></Col>
         <Col className="col-md-8 right-bg"> <CustomerFrom></CustomerFrom></Col>
      </Row>
    </div>
  );
};

export default PlaceOrder;


