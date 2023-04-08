import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Navbar() {
    const { cartItems } = useContext(Context)
    const [showGenderLinks, setShowGenderLinks] = useState(false)
    const [active,setActive] = useState("nav-menu")
    const [toggleIcon,setToggleIcon] = useState("nav-toggler")
    
    const navToggle = () => {
        active === "nav-menu" ? setActive("nav-menu nav-active") : setActive("nav-menu")

        toggleIcon === "nav-toggler" ? setToggleIcon("nav-toggler toggle") : setToggleIcon("nav-toggler")
    }

    const handleMouseEnter = () => {
        setShowGenderLinks(true)
    }
    const handleMouseLeave = () => {
        setShowGenderLinks(false)
    }

    return (
        <nav className="navbar">
            <h1 >Stay Awesome</h1>
            <div className={active}>
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
                <Link className="cart-navbar" to='/einkaufswagen'>

                <i className="ri-shopping-bag-line fa-6x bag-icon"></i>
                <p>{cartItems.length}</p>
                </Link>
            </div>
            <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
            </div>
           
        </nav>
    )
}

export default Navbar