import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Navbar() {
    const { cartItems } = useContext(Context)
    const [showGenderLinks, setShowGenderLinks] = useState(false)

    const handleMouseEnter = () => {
        setShowGenderLinks(true)
    }
    const handleMouseLeave = () => {
        setShowGenderLinks(false)
    }
    return (
        <nav className="navbar">
    
            <h1 >Stay Awesome</h1>
            <div className="navbar-middle-elements">
                <Link to='/'>Start</Link>
                <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >Shop</p>
                {showGenderLinks && (
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}className="gender-navbar-box">
                        <Link to={"/herren"}>Herren</Link>
                        <Link to={"/damen"}>Damen</Link>
                    </div>
                )}
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