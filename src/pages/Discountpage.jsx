import React from "react";
import sneakerData from "../data/sneakerData";
import Shoe from "../components/Shoe";
import { nanoid } from 'nanoid'
import "../assets/styles/discountpage.css"

function Discount() {
    const DiscountShoeElements = sneakerData.map(sneaker => {
        if (sneaker.discount) {
            return <Shoe key={nanoid()} fullObj={sneaker} images={[sneaker.img, sneaker.img2, sneaker.img3]} name={sneaker.name} price={sneaker.price} oldPrice={sneaker.oldPrice} />
        }
    })
    
    return (
        <div className="shoes-div">
            <h1>Angebote</h1>
            <div className="shoes-grid" >
                {DiscountShoeElements}
            </div>
        </div>
    )
}

export default Discount