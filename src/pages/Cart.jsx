import React, { useContext } from "react";
import { Context } from "../Context";
import CreateCartElements from "../components/CartElements";
import { nanoid } from 'nanoid'

function Cart() {
    const { cartItems, removeFromCart } = useContext(Context)

    function calculateTotalCost() {
        let totalPrice = 0
        cartItems.map(sneaker => {
            totalPrice += sneaker.price
        })
        return totalPrice
    }


    const cartElements = cartItems.map(sneaker => {
        return <CreateCartElements key={nanoid()} name={sneaker.name} price={sneaker.price} img={sneaker.img} handleClick={() => removeFromCart(sneaker.id)} />
    })

    return (
        <div className="cart-page">
            <h1>Warenkorb ({cartItems.length} Artikel)</h1>
            <h2>Gesamtsumme: {calculateTotalCost()} €</h2>
            <div className="cart-elements-container">
                {cartElements}
            </div>
            
        </div>
    )
}

export default Cart