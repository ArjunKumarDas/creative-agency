import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import nasa from '../../../../images/customer-1.png';
import Mariam from '../../../../images/customer-2.png';
import bira from '../../../../images/customer-3.png';
import FeedbackClient from '../FeedbackClient/Feedback';
const feedbackData = [
    {
     name:'Nash Patrik',
     img: nasa,
     status: 'CEO, Manpol',
     review: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
 
    },
    {
        name:'Mariam Patrik',
        img: Mariam,
        status: 'CEO, Manpol',
        review: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    
    },
    {
        name:'Baria patel',
        img: bira,
        status: 'CEO, Manpol',
        review: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    
    }
 ]
const ClientFeedback = () => {
    return (
        <Container>
        <Row>
            <Col className="d-flex justify-content-center mt-5"> 
                <h2>Clients <span className="text-success">Feedback</span></h2>
            </Col>
        </Row>
         <Row className="d-flex justify-content-center">
        <Col className="w-75 row mt-5 pt-5 mb-5">
            {
                feedbackData.map(feed => <FeedbackClient feed={feed} key={feed.name}></FeedbackClient>)
            }
        </Col>
         </Row>
    </Container>
    );
};

export default ClientFeedback;