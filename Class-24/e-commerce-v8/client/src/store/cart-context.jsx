import React, { createContext, useEffect, useState } from 'react'

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addToCart: ()=>{}
});

export const CartContextProvider = (props) => {

    const initialCart = JSON.parse(window.localStorage.getItem('cart') || '[]');

    const [cart, setCart] = useState(initialCart);

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const context = {
        cart: cart,
        cartLength: cart.length,
        addToCart: addToCart
    }
    return <CartContext.Provider value={context}>
        {props.children}
    </CartContext.Provider>
}

export default CartContext;
