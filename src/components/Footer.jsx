import React from "react";
import { Link } from "react-router-dom";



function Footer() {
    return (
        <footer className="footer">
            
                <div className="adress-footer">
                    <h2>Adresse</h2>
                    <p>Musterstraße 12</p>
                    <p>53639 Königswinter</p>
                    <p>info@muster.com</p>
                    <p>Tel: +49 (0) 1$$456</p>
                </div>
                <div className="footer-second-line">
                <div className="footer-links">
                    <Link to={"/cookies"}>Cookies</Link>
                    <Link to={"/impressum"}>Impressum</Link>
                    <Link to={"/datenschutz"}>Datenschutz</Link>
                </div>
                <p>© 2035 AWESOME SNEAKERS.</p>
            </div>
                <div className="newsletter-footer">
                    <h2>BLEIB AM BALL</h2>
                    <p>Newsletter abbonieren</p>
                    <input className="input-email" type="email" placeholder="E-Mail-Adresse" /> 
                    <button className="newsletter-btn">Jetzt abbonieren</button>
                </div>
        

           
        </footer>
    )
}
// drei Links , Cookies, Impressum & Datenschutz
// dadrunter © 2035 AWESOME SNEAKERS.
export default Footer