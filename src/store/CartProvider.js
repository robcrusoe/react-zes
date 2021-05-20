import React from 'react';
import CartContext from './cart-context';

/* Manages CartContext data */
/* Provides CartContext data to all components that wants access to it */
const CartProvider = props => {
    const addItemToCart = (item) => {

    };

    const removeItemFromCart = (id) => {

    };
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
};

export default CartProvider;