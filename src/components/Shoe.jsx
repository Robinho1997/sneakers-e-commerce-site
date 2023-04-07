import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Button } from "@mui/material";


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
            <Link to={`/${props.name}`}>{props.name}</Link>

            {props.oldPrice ?
                <p>
                    <span className="old-price">{props.oldPrice} €</span>
                    <span className="discount-price">{props.price} €</span>
                </p>
                : <p className="price">{props.price} €</p>}

            <Button variant="text" onClick={() => addToCart(props.fullObj)}>
                <i className="ri-shopping-cart-2-fill" /><p>In den Warenkorb</p>
            </Button>

        </div>
    )
}

export default Shoe