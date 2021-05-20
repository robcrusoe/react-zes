import classes from './MealItemForm.module.css';
import React, { Fragment, useRef } from 'react';
import Input from '../../UI/Input';

const MealItemForm = props => {
    const amountInputRef = useRef();

    const submitHandler = event => {
        /* To prevent browser-default action of reloading the page on form submit */
        event.preventDefault();


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
            </form>
        </Fragment>
    );
};

export default MealItemForm;