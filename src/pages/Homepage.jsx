import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sneakerData from "../data/sneakerData";
import "../assets/styles/homepage.css"

function HomePage() {
    const [imageIndex, setImageIndex] = useState(0)
    // change backgroundimage every 0.2 second
    const discountedSneaker = sneakerData.filter(sneaker => sneaker.discount)

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % discountedSneaker.length)
        }, 200);
        return () => clearInterval(interval)
    }, [])

    ;

    const styles = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(209, 202, 207, 0.73)),url(${discountedSneaker[imageIndex].img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div>
            <div className="homepage-welcome-div">
                <h1 className="cloud-text cloud-title">Awesome Sneakers</h1>
              
                <Link to="/herren">SHOP NOW</Link>
            </div>

            <div className="homepage-gender-shop-selection-div">
                <div className="men-homepage-background">
                    <Link to={"/herren"}>Herren Kollektion</Link>
                </div>
                <div className="women-homepage-background">
                    <Link to={"/damen"}>Damen Kollektion</Link>
                </div>
            </div>
            <div style={styles}
                className="changing-background-container">
                <div className="sales-notice-card">
                    <h1>Spare 40% - 60% </h1>
                    <Link to="/angebote">ANGEBOTE</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage