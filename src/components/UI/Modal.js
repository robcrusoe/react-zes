import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onHideCart}>
            </div>
        </Fragment>
    );
};

const ModalOverlay = props => {
    return (
        <Fragment>
            <div className={classes.modal}>
                <div className={classes.content}>
                    {props.children}
                </div>
            </div>
        </Fragment>
    );
};

const portalEl = document.getElementById('overlays');

const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalEl)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
        </Fragment>
    );
};

export default Modal;