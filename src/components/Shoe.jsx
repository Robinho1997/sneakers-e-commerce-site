import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";


function Shoe(props) {
    const {addToCart,cartItems} = useContext(Context)
 
    return (
        <div className="shoe-component">
            <img className="shoe-img" src={props.img}/>
            <Link>{props.name}</Link>
            <p>{props.price}€</p>
            <button onClick={()=>addToCart(props.fullObj)}>In den Warenkorb</button>
        </div>
    )
}

export default Shoe