import React from "react";
import "../assets/styles/supportpage.css"

function Support() {
    return (
        <div className="support-page">
        <div>
            <div className="support-text">
                <h2>Kontaktieren</h2>
                <p>Noch Fragen?</p>
                <p>Sende uns gern eine E-Mail an info@muster.com <br></br> oder fülle das Formular aus: </p>
            </div>
            <form className="support-form">
                <div className="support-inputs">
                    <input placeholder="Name" type="text" />
                    <input placeholder="E-Mail-Adresse" type="email" />
                    <input placeholder="Telefon" type="tel" />
                </div>
                <textarea placeholder="Nachricht schreiben..." />
                <button className="support-btn">Absenden</button>
            </form>
            </div>
            <img className="support-img" src="src/assets/images/support.jpg"/>
        </div>
    )
}

export default Support