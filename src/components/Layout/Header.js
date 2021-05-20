import React, { Fragment } from 'react';

import classes from './Header.module.css';
import mealsImage from './../../assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    );
};

export default Header;