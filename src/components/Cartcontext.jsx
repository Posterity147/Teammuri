// src/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => setCartItems((prevItems) => [...prevItems, item]);

    const getItemCount = () => cartItems.length;

    return (
        <CartContext.Provider value={{ addToCart, cartItems, getItemCount }}>
            {children}
        </CartContext.Provider>
    );
};

// Define useCart separately
const useCart = () => {
    return useContext(CartContext);
};

export { CartProvider, useCart };
