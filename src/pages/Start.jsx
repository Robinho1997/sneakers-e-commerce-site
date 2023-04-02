import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImages from "../data/backgroundImages";


function Start() {
    const [imageIndex, setImageIndex] = useState(0)
    // change backgroundimage every 0.2 second
    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length)
        }, 200);
        return () => clearInterval(interval)
    }, [])

    const styles = {
        backgroundImage: "url(" + backgroundImages[imageIndex] + ")",
        backgroundPosition: 'center',
        backgroundSize: "900px",
        backgroundRepeat: 'no-repeat',
    }
        
    return (
        <div>
            <div className="startpage-welcome-div">
                <h1 className="cloud-text cloud-title">Awesome</h1>
                <h1 className="cloud-text cloud-title">Sneakers</h1>
                <Link to="/pages/shop">SHOP NOW</Link>
            </div>
           
           <div className="startpage-gender-shop-selection-div">
                <div className="men-startpage-background">
                    <Link to={"/herren"}>Herren Kollektion</Link>
                </div>
                <div className="women-startpage-background">
                    <Link to={"/damen"}>Damen Kollektion</Link>
                </div>
           </div>

            <div className="startpage-sales-div">
                <div style={styles}
                    className="changing-background-container">
                    <div className="sales-notice-card">
                        <h1>Spare 40%-60%</h1>
                        <Link to="/pages/shop">ANGEBOTE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start