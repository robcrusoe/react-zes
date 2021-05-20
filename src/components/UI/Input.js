import classes from './Input.module.css';
import React, { Fragment } from 'react';

const Input = props => {
    return (
        <Fragment>
            <div className={classes.input}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input {...props.input} />
            </div>
        </Fragment>
    );
};

export default Input;