import classes from './MealItemForm.module.css';
import React, { Fragment } from 'react';
import Input from '../../UI/Input';

const MealItemForm = props => {
    return (
        <Fragment>
            <form className={classes.form}>
                <Input label='Amount' input={{
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