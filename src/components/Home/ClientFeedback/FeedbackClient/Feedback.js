import React from 'react';
import './Feedback.css';
import { Col } from 'react-bootstrap';

const FeedbackClient = ({ feed }) => {
    return (
        <Col className="col-md-3 col-border p-2 ml-5 align-center">
            <div>
                <div className="p-float"><img className="pic pr-4" src={feed.img} /></div>
                <div>
                    <h5>{feed.name}</h5>
                    <h6>{feed.status}</h6>
                </div>
            </div>
            <p className="pt-2">{feed.review}</p>
        </Col>
    );
};

export default FeedbackClient;
