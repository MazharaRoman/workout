import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import { createMuiTheme } from 'material-ui/styles';
import { grey, amber, red } from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';
import Layout from './components/Layout/Layout';
import Planner from './containers/Planner/Planner';
import HeadBar from './components/UI/HeadBar/HeadBar';

import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const darkBaseTheme = createMuiTheme({
    palette: {
        primary: grey,
        accent: amber,
        error: red,
        type: 'dark',
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                {/* <Layout> */}
                {/* <Planner /> */}
                {/* </Layout> */}
            </MuiThemeProvider>
        );
    }
}

export default App;
