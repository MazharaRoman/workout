import React from 'react';

import Aux from '../../hoc/Aux';
import HeadBar from '../UI/HeadBar/HeadBar';
import classes from './Layout.css';

export default props => (
    <div className={classes.Layout}>
    <div className={classes.SideMenu}> </div>
        <HeadBar />
        <main className={classes.Main}>{props.children}</main>
        {/* <footer>footer</footer> */}
    </div>
);
