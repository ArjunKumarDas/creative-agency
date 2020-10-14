import React from 'react';
import './MediaPartner.css';
import { Col, Container, Row } from 'react-bootstrap';
import  slack from '../../../images/logos/slack.png';
import  google from '../../../images/logos/google.png';
import  uber from '../../../images/logos/uber.png';
import  netflix from '../../../images/logos/netflix.png';
import  airnb from '../../../images/logos/airbnb.png';


const MediaPartner = () => {
    return (
        <Container>
            <Row className="mt-5 mb-5">
                <Col><img className="media-p" src={slack} alt=""/></Col>
                <Col><img className="media-p" src={google} alt=""/></Col>
                <Col><img className="media-p" src={uber} alt=""/></Col>
                <Col><img className="media-p" src={netflix} alt=""/></Col>
                <Col><img className="media-p" src={airnb} alt=""/></Col>
            </Row>
        </Container>
    );
};

export default MediaPartner;