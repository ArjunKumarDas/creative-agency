import React, { useContext } from 'react';
import './Login.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory(); 
    const location = useLocation() ; 
    let { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig); 
    }
   
    const handleGoogleSign =() => {

        const provider = new firebase.auth.GoogleAuthProvider(); 
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = { displayName, email}
            setLoggedInUser(signedInUser);
           history.replace(from);
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
    return (
        <div className="body">
            <Container>
                <Row className="mt-5">
                    <Col className="d-flex justify-content-center"><Link to="/"><img className="logo" src={logo} alt="" /></Link></Col>
                </Row>
                <Row className="mt-5">
                    <Col className="">
                       <div className="login-box d-flex">
                         <div className="m-auto">
                           <h3 className="pl-5 pb-3">Login With</h3>
                           <Button onClick={handleGoogleSign} className="btn bg-light text-dark pl-5 pr-5 mb-3">Continue with Google</Button>
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