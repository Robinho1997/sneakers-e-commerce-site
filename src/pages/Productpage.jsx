import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import sneakerData from "../data/sneakerData";
import { Rating, Button, Tab } from "@mui/material";
import { Context } from "../Context";
import "../assets/styles/productpage.css"

function Productpage() {
    const { name } = useParams()
    const { addToCart } = useContext(Context)
    let sneaker = sneakerData.filter(sneaker => sneaker.name === name)
    sneaker = sneaker[0]
    const [mainImg, setMainImg] = useState(sneaker.img)

    function changeImg(img) {
        setMainImg(img)
    }

    return (
        <div className="product-page">
            <div className="product-page-images">
                <div className="small-images">
                    <img src={sneaker.img} onMouseEnter={() => changeImg(sneaker.img)} />
                    <img src={sneaker.img2} onMouseEnter={() => changeImg(sneaker.img2)} />
                    <img src={sneaker.img3} onMouseEnter={() => changeImg(sneaker.img3)} />
                </div>
                <img className="big-img" src={mainImg}/>
            </div>
            <div className="product-page-right-side">
                <div className="product-page-infos">
                    <h2>{sneaker.brand}</h2>
                    <h1>{sneaker.name}</h1>
                    <p className="big">{sneaker.price} € <span className="small"> inkl. MwSt.</span></p>
                    <Rating className="rating-stars" defaultValue={4.5} precision={0.5} color="black" />
                    <Button className="product-page-btn" variant="text" onClick={() => addToCart(sneaker)}>
                        <i className="ri-shopping-cart-2-fill" /><p>In den Warenkorb</p>
                    </Button>
                </div>
                <div className="delivery-infos">
                    <div>
                        <i className="ri-truck-line"></i>
                        <div className="flex">
                            <p>1-3 Werktage</p> <p>Kostenlos</p>
                        </div>
                        <p>Standard Lieferung</p>
                    </div>
                    <hr />
                    <div>
                        <i className="ri-inbox-line"></i>
                        <p>Kostenloser Versand & Rückversand</p>
                    </div>
                    <hr />
                    <div>
                        <i className="ri-arrow-go-back-line"></i>
                        <p>100 Tage Rückgaberecht</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productpage