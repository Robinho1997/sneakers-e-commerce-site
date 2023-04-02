import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Stay Awesome</h1>
            <div className="navbar-middle-elements">
                <Link to='/'>Start</Link>
                <Link to='/men'>Shop</Link>
                <Link to='/über'>Über uns</Link>
                <Link to='/kundendienst'>Kundendienst</Link>
            </div>
            <Link to='/einkaufswagen'>
                <i className="ri-shopping-bag-line fa-6x bag-icon"></i>
            </Link>
        </nav>
    )
}

export default Navbar