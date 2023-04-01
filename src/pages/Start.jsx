import React from "react";
import { Link } from "react-router-dom";
// Produkt image welches das ganze bild zeigt
// Logo und Name in der Mitte
// Link welcher zum Shop führt
function Start() {
    return ( 
        <div className="startpage-welcome-div">
            <h1 className="cloud-text cloud-title">Awesome </h1>
            <h1 className="cloud-text cloud-title">Sneakers</h1>
            <Link  to="/pages/shop">SHOP NOW</Link>
        </div>
    )
}

export default Start