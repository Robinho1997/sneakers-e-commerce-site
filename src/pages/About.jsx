import React from "react";

function About() {
    return (
        <div className="about-page">
            <div>
                <h1>Über uns</h1>
                <p>Als eine der führenden Online-Plattformen für Sneaker in Europa beliefern wir Menschen aus 25 Ländern. In unserem Fashion-Store bieten wir unseren Kund*innen ein breites Angebot von mehr als 7.000 Marken.</p>
            </div>
            <div className="address-about-page">
                <div>
                    <h2>FILIALIEN</h2>
                    <p>Musterstraße 12</p>
                    <p>53639 Königswinter</p>
                    <p>filiale@website.com</p>
                    <p>Tel: +49 (0) 1$$456-1</p>
                    <br></br>
                    <p>Musterstraße 7</p>
                    <p>53604 Bad Honnef</p>
                    <p>filiale@website.com</p>
                    <p>Tel: +49 (0) 1$$456-2</p>
                </div>
                <div>
                    <h2>Öffnungszeiten</h2>
                    <p>Montag - Freitag: 11.00 - 18.30</p>
                    <p>Samstag: 11.00 - 17.00</p>
                    <p>Sonntag: geschlossen</p>
                </div>
                <img className="about-img" src="./src/assets/images/about.jpg"/>
            </div>
        </div>
    )
}

export default About