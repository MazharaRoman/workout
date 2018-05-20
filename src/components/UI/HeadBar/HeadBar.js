import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import classes from './HeadBar.css';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const HeadBar = () => (
        <AppBar position="static" color="default" > 
            <Toolbar className={classes.Header}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
                <Typography variant="title" color="inherit">
                    OOOSHEEE!
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
);

export default HeadBar;
