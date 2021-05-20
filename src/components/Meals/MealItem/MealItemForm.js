import classes from './MealItemForm.module.css';
import React, { Fragment, useRef, useState } from 'react';
import Input from '../../UI/Input';

const MealItemForm = props => {
    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        /* To prevent browser-default action of reloading the page on form submit */
        event.preventDefault();

        const enteredAmount = +amountInputRef.current.value;
        if (enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmount);
    };

    return (
        <Fragment>
            <form className={classes.form} onSubmit={submitHandler}>
                <Input
                    ref={amountInputRef}
                    label='Amount' input={{
                        id: 'amount_' + props.id,
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }} />
                <button>+ Add</button>

                {!amountIsValid && <p>Please enter a valid amount (1-5)!</p>}
            </form>
        </Fragment>
    );
};

export default MealItemForm;