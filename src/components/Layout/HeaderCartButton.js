import React, { Fragment, useContext, useEffect, useState } from 'react';

import CartIcon from './../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

import CartContext from './../../store/cart-context';

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    /* The `HeaderCartButton` component is re-evaluated everytime the CartContext changes */
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    /* Animation for `Cart` button */
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            /* Clean-up function */
            clearTimeout(timer);
        };
    }, [items]);

    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);

    return (
        <Fragment>
            <button className={btnClasses} onClick={props.onShowCart}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </Fragment>
    );
};

export default HeaderCartButton;