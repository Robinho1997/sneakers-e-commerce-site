import React from "react";
import Shoe from "../components/Shoe";
import sneakerData from "../data/sneakerData";
import { nanoid } from 'nanoid'
// if sneaker.gender === "male"
// return Shoe Component
function MenShop() {
    const MaleShoeElements = sneakerData.map(sneaker => {
        if(sneaker.gender === "male") {
            return <Shoe key={nanoid()} fullObj={sneaker} img={sneaker.img} name={sneaker.name} price={sneaker.price}/>
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