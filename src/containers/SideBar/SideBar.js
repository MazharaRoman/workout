import React from 'react';
import classes from './SideBar.css';

import Aux from '../../hoc/Aux/Aux';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

const SideBar = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close} />
            <div className={attachedClasses.join(' ')} />
        </Aux>
    );
};

export default SideBar;
