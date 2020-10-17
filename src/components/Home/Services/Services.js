import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import web from '../../../images/icons/webdesign.png';
import graphic from '../../../images/icons/graphic.png';
import development from '../../../images/icons/development.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Link } from 'react-router-dom';
const serviceData = [
   {
    name:'Web & Mobile design',
    img: web,
    about: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'

   },
   {
    name:'Graphic design',
    img: graphic,
    about: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'

   },
   {
    name:'Web Development',
    img: development,
    about: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'

   }
]
const Services = () => {
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center mt-5"> 
                    <h2>Provide awesome <span className="text-success">services</span></h2>
                </Col>
            </Row>
             <Row className="d-flex justify-content-center">
            <Col className="w-75 row mt-5 pt-5 mb-5">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                }
            </Col>
             </Row>
        </Container>
    );
};

export default Services;