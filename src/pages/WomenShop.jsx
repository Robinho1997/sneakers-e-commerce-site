import React from "react";
import Shoe from "../components/Shoe";
import sneakerData from "../data/sneakerData";
import { nanoid } from 'nanoid'
// if sneaker.gender === "male"
// return Shoe Component
function WomenShop() {
    const FemaleShoeElements = sneakerData.map(sneaker => {
        if(sneaker.gender === "female") {
            return <Shoe key={nanoid()} fullObj={sneaker} images={[sneaker.img,sneaker.img2,sneaker.img3]} name={sneaker.name} price={sneaker.price}/>
        }
        
    })
    return (
        <div className="shoes-div">
            <h1>DAMEN SNEAKER</h1>
            <div className="shoes-grid">
                {FemaleShoeElements}
            </div>
        </div>
    )
}

export default WomenShop