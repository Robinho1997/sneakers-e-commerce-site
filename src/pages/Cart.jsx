import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import CreateCartElements from "../components/CartElements";
import { nanoid } from 'nanoid'

function Cart() {
    const { cartItems, removeFromCart, setCartItems } = useContext(Context)
    const [buttonText,setButtonText] = useState("Kauf abschließen")
    const [buttonDisabled,setButtonDisabled] = useState(false)

    useEffect(()=>{
        if (cartItems.length < 1) {
            setButtonDisabled(true)
        }
    },[])
   

    function calculateTotalCost() {
        let totalPrice = 0
        cartItems.map(sneaker => {
            totalPrice += sneaker.price
        })
        return totalPrice
    }
    
    function buyCartContent() {
        setButtonText("...Ordering")
        setTimeout(() => {
            setButtonText("Ordered")
            setButtonDisabled(true)
            setCartItems([])
        }, 3000);
        
    }


    const cartElements = cartItems.map(sneaker => {
        return <CreateCartElements key={nanoid()} name={sneaker.name} price={sneaker.price} img={sneaker.img} handleClick={() => removeFromCart(sneaker.id)} />
    })

    return (
        <div className="cart-page">
            <div className="cart-infos">
            <h1>Warenkorb ({cartItems.length} Artikel)</h1>
            <h2>Gesamtsumme: {calculateTotalCost()} €</h2>
            <button className="buy-button" disabled={buttonDisabled} onClick={buyCartContent}>{buttonText}</button>
            </div>
            <div className="cart-elements-container">
                {cartElements}
            </div>
            
        </div>
    )
}

export default Cart