import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const HeadBar = () => (
    <div className="Header">
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    OOOSHEEE!
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default HeadBar;
