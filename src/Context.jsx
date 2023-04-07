import React, { useState } from "react";
const Context = React.createContext()

function ContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([])


    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }


    function removeFromCart(index) {
        setCartItems(prevItems => {
            const newCartItems = [...prevItems]
            newCartItems.splice(index,1)
            return newCartItems
        })
    }

    return (
        <Context.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }