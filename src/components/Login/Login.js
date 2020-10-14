import React from 'react';
import './Login.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="body">
            <Container>
                <Row className="mt-5">
                    <Col className="d-flex justify-content-center"><img className="logo" src={logo} alt="" /></Col>
                </Row>
                <Row className="mt-5">
                    <Col className="">
                       <div className="login-box d-flex">
                         <div className="m-auto">
                           <h3 className="pl-5 pb-3">Login With</h3>
                           <Button className="btn bg-light text-dark pl-5 pr-5 mb-3">Continue with Google</Button>
                           <p>Don't have an account ?<span><Link> Create an account</Link></span></p>
                         </div>
                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;