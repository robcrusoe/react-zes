import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

/* The `reducer` function is placed outside the component function so that it isn't recreated every-time the provider is re-evaluated */
const cartReducer = (state, action) => {
    if (action === 'ADD_ITEM') {
        /* We wanna update our state in an immutable way */
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    } else if (action === 'DELETE_ITEM') {
        return;
    }

    return defaultCartState;
};

/* Manages CartContext data */
/* Provides CartContext data to all components that wants access to it */
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item
        });
    };

    const removeItemFromCart = (id) => {
        dispatchCartAction({
            type: 'DELETE_ITEM',
            id: id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    };

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
};

export default CartProvider;