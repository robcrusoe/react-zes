import React, { Fragment, useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from './../../store/cart-context';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => { };

    const cartItemAddHandler = (item) => { };

    const cartItems = cartCtx.items.map(item => <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />)

    return (
        <Fragment>
            <Modal onHideCart={props.onHideCart}>
                <ul className={classes['cart-item']}>{cartItems}</ul>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                    {hasItems && <button className={classes.button}>Order</button>}
                </div>
            </Modal>
        </Fragment>
    );
};

export default Cart;