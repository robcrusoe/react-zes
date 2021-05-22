import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

/* The `reducer` function is placed outside the component function so that it isn't recreated every-time the provider is re-evaluated */
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        /* We wanna update our state in an immutable way */
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedCartItem;
        let updatedCartItems;

        if (existingCartItem) {
            updatedCartItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
        } else {
            updatedCartItem = { ...action.item };
            updatedCartItems = state.items.concat(updatedCartItem);
        }

        return {
            items: updatedCartItems,
            totalAmount: updatedTotalAmount
        };
    } else if (action.type === 'DELETE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedCartItems;
        if (existingItem.amount === 1) {
            updatedCartItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedCartItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
        }

        return {
            items: updatedCartItems,
            totalAmount: updatedTotalAmount
        };
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