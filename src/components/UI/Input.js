import classes from './Input.module.css';
import React, { Fragment } from 'react';

const Input = React.forwardRef((props, ref) => {
    return (
        <Fragment>
            <div className={classes.input}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input {...props.input} ref={ref} />
            </div>
        </Fragment>
    );
});

export default Input;