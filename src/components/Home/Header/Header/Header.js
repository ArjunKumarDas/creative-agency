import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import Manubar from '../Manubar/Manubar';
import { Container } from 'react-bootstrap';


const Header = () => {
    return (
        <div className="h-color">
           <Container>
           <Manubar></Manubar>
           <HeaderMain></HeaderMain>
           </Container>
        </div>
    );
};

export default Header;