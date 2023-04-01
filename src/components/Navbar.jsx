import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Stay Awesome</h1>
            <div className="navbar-middle-elements">
                <Link to='/'>Start</Link>
                <Link to='/pages/shop'>Shop</Link>
                <Link to='/pages/über'>Über uns</Link>
                <Link to='/pages/kundendienst'>Kundendienst</Link>
            </div>
            <Link to='/pages/einkaufswagen'>
                <i className="ri-shopping-bag-line fa-6x bag-icon"></i>
            </Link>
        </nav>
    )
}

export default Navbar