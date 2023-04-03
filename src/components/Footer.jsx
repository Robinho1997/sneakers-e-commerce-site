import React from "react";
// Cooles hintergrundbild
// ungefäht 50vh
// flex erstellen damit horiziontal
// 1. Adresse 2. Kontaktieren 3. Newsletter
function Footer() {
    return (
        <div className="footer">
            <div className="footer-first-line">
                <div className="adress-footer">
                    <h2>Adresse</h2>
                    <p>Musterstraße 12</p>
                    <p>53639 Königswinter</p>
                    <p>info@muster.com</p>
                    <p>Tel: +49 (0) 1$$456</p>
                </div>
                <div className="contact-footer">
                    <h2>Kontaktieren</h2>
                    <form className="contact-form">
                        <div className="contact-inputs">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="E-Mail-Adresse" />
                            <input type="tel" placeholder="Telefon" />
                        </div>
                        <textarea placeholder="Nachricht schreiben ..." />
                        <button type="button">Absenden</button>
                    </form>
                </div>
                <div className="newsletter-footer">
                    <h2>BLEIB AM BALL</h2>
                    <p>Newsletter abbonieren</p>
                    <input className="input-email" type="email" placeholder="E-Mail-Adresse" /> 
                    <button className="newsletter-btn">Jetzt abbonieren</button>
                </div>
            </div>
        </div>
    )
}

export default Footer