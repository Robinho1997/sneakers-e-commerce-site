import React from "react";

function CreateCartElements(props) {
    return (
        <div className="cart-element">
            <img src={props.img} />
            <p>{props.name} - {props.price} €</p>
            <button onClick={props.handleClick}>Remove</button>
        </div>
    )
}

export default CreateCartElements