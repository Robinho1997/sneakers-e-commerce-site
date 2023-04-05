import React from "react";
import Shoe from "../components/Shoe";
import sneakerData from "../data/sneakerData";
import { nanoid } from 'nanoid'

function MenShop() {
    const ShoeElements = sneakerData.map(sneaker => {
        return <Shoe key={nanoid()} fullObj={sneaker} img={sneaker.img} name={sneaker.name} price={sneaker.price}/>
    })
    return (
        <div className="men-shoes-div">
            <h1>HERREN SNEAKER</h1>
            <div className="shoes-grid">
                {ShoeElements}
            </div>
        </div>
    )
}

export default MenShop