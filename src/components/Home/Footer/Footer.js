import React from 'react';
import './Footer.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container className="pt-5">
                <Row>
                    <Col>
                        <h1>Let us handle your <br />project, professionally.</h1>
                        <p>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="Email">
                                <Form.Control type="email" placeholder="Enter Your email" />
                            </Form.Group>
                            <Form.Group controlId="Name">
                                <Form.Control type="text" placeholder="Your Name / Company Name" />
                            </Form.Group>
                            <Form.Group controlId="textarea">
                                <Form.Control as="textarea" rows={6} type="text" placeholder="Your Meassage"/>
                            </Form.Group>
                            <Button variant="dark" type="submit" className="pl-5 pr-5"> Send</Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center pt-5 pb-5"><p><small>copyright Orange labs 2020</small></p></Row>
            </Container>
        </div>
    );
};

export default Footer;