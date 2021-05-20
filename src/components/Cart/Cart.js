import React, { Fragment } from "react";

import classes from './Cart.module.css';

const Cart = props => {
    const cartItems = [
        {
            id: 'c1',
            name: 'Sushi',
            amount: '2',
            price: '12.98'
        }
    ].map(item => <li>{item.name}</li>)

    return (
        <Fragment>
            <div>
                <ul className={classes['cart-item']}>{cartItems}</ul>
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>35.52</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']}Close></button>
                    <button className={classes.button}>Order</button>
                </div>
            </div>
        </Fragment>
    );
};

export default Cart;