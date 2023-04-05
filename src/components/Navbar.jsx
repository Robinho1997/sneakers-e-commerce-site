import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Navbar() {

    const { cartItems } = useContext(Context)


    return (
        <nav className="navbar">
            <h1>Stay Awesome</h1>
            <div className="navbar-middle-elements">
                <Link to='/'>Start</Link>
                <Link to='/herren'>Shop</Link>
                <Link to='/über'>Über uns</Link>
                <Link to='/kundendienst'>Kundendienst</Link>
            </div>
            <Link className="cart-navbar" to='/einkaufswagen'>
                <p>{cartItems.length}</p>
                <i className="ri-shopping-bag-line fa-6x bag-icon"></i>
            </Link>
        </nav>
    )
}

export default Navbar