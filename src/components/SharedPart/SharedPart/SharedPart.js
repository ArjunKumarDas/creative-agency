import React from 'react';
import DashBoard from '../DashBoard/DashBoard';
import NavbarTop from '../NavbarTop/NavbarTop';

const SharedPart = () => {
    return (
        <div>
        <NavbarTop></NavbarTop>
        <DashBoard></DashBoard>
       </div>
    );
};

export default SharedPart;