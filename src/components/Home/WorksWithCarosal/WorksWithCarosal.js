import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './WorksWithCarosal.css';

const WorksWithCarosal = () => {
    return (
        <div className="carosel-bg">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center mt-5 mb-5">
                        <h2 className="text-light">Here are some of <span className="text-success">our works</span></h2>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                </Row>
            </Container>
        </div>
    );
};

export default WorksWithCarosal;