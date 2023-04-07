import React from "react";
import Shoe from "../components/Shoe";
import sneakerData from "../data/sneakerData";
import { nanoid } from 'nanoid'

function MenShop() {
    const MaleShoeElements = sneakerData.map(sneaker => {
        if(sneaker.gender === "male") {
            return <Shoe key={nanoid()} id={sneaker.id} fullObj={sneaker} images={[sneaker.img,sneaker.img2,sneaker.img3]} name={sneaker.name} price={sneaker.price} oldPrice={sneaker.oldPrice}/>
        }
        
    })
    return (
        <div className="shoes-div">
            <h1>HERREN SNEAKER</h1>
            <div className="shoes-grid">
                {MaleShoeElements}
            </div>
        </div>
    )
}

export default MenShop