import React, { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
  
    return (
        <Col className="col-md-4 text-center">

            <Link to="/placeOrder">
                <img className="service-img" src={service.img} alt="" />
                {/* <img className="service-img" src={`https://stormy-brook-77965.herokuapp.com/${service.img}`} alt="" /> */}
                <h5 className="mt-3 mb-3"  >{service.name}</h5>
                <p className="text-secondary">{service.about}</p>
            </Link>

        </Col>
    );
};

export default ServiceDetail;