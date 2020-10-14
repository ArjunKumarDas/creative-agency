import React from 'react';
import { Col, Row } from 'react-bootstrap';
import framePic from '../../../../images/logos/frame.png';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <Row className="mb-5">
            <Col>
                <>
                    <h1 className="pt-5">Let’s Grow Your<br/>
                     Brand To The<br/>
                     Next Level</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo ipsum duis <br/> laoreet maecenas. Feugiat </p>
                     <button className="btn bg-dark pl-5 pr-5 text-light">Hire Us</button>
                </>
            </Col>
            <Col><img className="frame" src={framePic} alt=""/></Col>
        </Row>
    );
};

export default HeaderMain;