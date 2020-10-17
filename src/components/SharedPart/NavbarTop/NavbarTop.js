import React, { useContext } from 'react';
import './NavbarTop.css';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';
const NavbarTop = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="nav-top-bg pt-5 pb-5 d-flex">
                    <div className="col-md-3"><img className="logo pl-5" src={logo} alt=""/></div>
                    <div className="col-md-7"><h6>Order</h6></div>
                    <div className="col-md-2">Name : {loggedInUser.displayName}</div>
        </div>
    );
};

export default NavbarTop;