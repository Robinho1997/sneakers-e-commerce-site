import React from "react";

function CreateCartElements(props) {
    return (
        <div className="cart-element">
            <img src={props.img} />
            <p>{props.name}</p>
            <p>{props.price} €</p>
            <button className="remove-btn" onClick={props.removeFromCart}><i class="ri-delete-bin-6-line"></i><p>Remove</p></button>
        </div>
    )
}

export default CreateCartElements