import React, { useEffect, useState } from 'react';
import './AdminServiceStatus.css'
import { Col, Row, Table } from 'react-bootstrap';
import NavbarTop from '../SharedPart/NavbarTop/NavbarTop';
import Sidebar from '../Sidebar/Sidebar';

const AdminServiceStatus = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://stormy-brook-77965.herokuapp.com/allUser')
        .then(res => res.json())
        .then(data => setOrder(data));
    }, [])
    return (
        <div>
            <><NavbarTop></NavbarTop></>
            <Row>
                 <Col className="col-md-2 sidebar-bg">
                     <Sidebar></Sidebar>
                 </Col>
                 <Col className="right-bg">
                 <div className="mt-1">
                     {/* <tr>
                         <td className="pl-5 pr-5">Name</td>
                         <td className="pl-5 pr-5">Email Id</td>
                         <td className="pl-5 pr-5">Service</td>
                         <td className="pl-5 pr-5">Product Detail</td>
                         <td className="pl-5 pr-5">status</td>
                     </tr> */}
                     <Table striped bordered hover>
  <thead>
    <tr>
      <th> Name</th>
      <th>Email Id</th>
      <th>Service Name</th>
      <th>Product Detail</th>
      <th>Status</th>
      
    </tr>
  </thead>
</Table>
                 </div>
                  <div>
                  {

                     order.map(items => <Table striped bordered hover>
                        <tbody>
                          <tr>
                          <td>{items.name}</td>
                          <td>{items.email}</td>
                          <td>{items.course}</td>
                          <td>{items.project}</td>
                          <td>status</td>
                          </tr>
                         
                        </tbody>
                      </Table>)
                   }
                  </div>
                 </Col>
            </Row>
            
        </div>
    );
};

export default AdminServiceStatus;