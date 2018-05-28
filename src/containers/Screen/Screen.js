import React from 'react';
import classes from './Screen.css';

const screen = props => {
    return <main className={classes.Main}> {props.children}</main>;
};

export default screen;
