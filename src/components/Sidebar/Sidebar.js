import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="ml-5 pl-3">
            <Link to="/placeOrder"><p>Order</p></Link>
            <Link to="/customerStatus"><p>serviceList</p></Link>
            <Link to="/adminServiceStatus"><p>Admin</p></Link>
            <Link to="/adminAddService"><p>Add Service</p></Link>
            <Link to="/reviewPage"><p>Review</p></Link>
        </div>
    );
};

export default Sidebar;