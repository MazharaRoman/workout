import React from 'react';

import Aux from '../../hoc/Aux';
import HeadBar from '../UI/HeadBar/HeadBar';

export default props => (
    <div className="Screen">
        <main className="Main">{props.children}</main>
        <footer>footer</footer>
    </div>
);
