import React, { useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './WorksWithCarosal.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';


const WorksWithCarosal = () => {
    // const [index, setIndex] = useState();

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };

    return (
        <div className="carosel-bg">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center mt-5">
                        <h2 className="text-light">Here are some of <span className="text-success">our works</span></h2>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                   <div className="caro-mar">
                   <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block carousel-img m-5"
                                src={carousel1}
                                alt=""
                            />

                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block carousel-img m-5"
                                src={carousel2}
                                alt=""
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block  carousel-img m-5"
                                src={carousel3}
                                alt=""
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block  carousel-img m-5"
                                src={carousel4}
                                alt=""
                            />

                        </Carousel.Item>
                    </Carousel>
                   </div>
                </Row>
            </Container>
        </div>
    );
};

export default WorksWithCarosal;