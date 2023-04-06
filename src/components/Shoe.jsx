import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


function Shoe(props) {
    const { addToCart } = useContext(Context)
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className="shoe-component">
            <Slider {...settings}>
                <div>
                    <img className="shoe-img" src={props.images[0]} />
                </div>
                <div>
                    <img className="shoe-img" src={props.images[1]} />
                </div>
                <div>
                    <img className="shoe-img" src={props.images[2]} />
                </div>
            </Slider>
            <Link>{props.name}</Link>
            <p>{props.price}€</p>
            <button onClick={() => addToCart(props.fullObj)}>In den Warenkorb</button>
        </div>
    )
}

export default Shoe