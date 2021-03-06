import React, { useContext, useEffect, useState } from 'react';
import './CustomerStatus.css';
import {  Col, Row } from 'react-bootstrap';
import NavbarTop from '../SharedPart/NavbarTop/NavbarTop';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../App';


const CustomerStatus = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const [status, setStatus] = useState([])
    useEffect(() => {
        fetch('https://stormy-brook-77965.herokuapp.com/user')
        // fetch('https://stormy-brook-77965.herokuapp.com/user?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setStatus(data));
    }, [])
    return (
        <div>
            <><NavbarTop></NavbarTop></>
             <Row>
                 <Col className="col-md-2 sidebar-bg">
                   <Sidebar></Sidebar>
                 </Col>
               <Col className="right-bg">
               {
                   status.map(item => <div className="cart m-3 p-3 ">
                      <p>{item.course}</p>
                      <h6><small>{item.project}</small></h6>
                </div>)
               }
              </Col>
             </Row>
        </div>
    );
};

export default CustomerStatus;