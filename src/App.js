import React, { Component } from 'react';
import logo from './logo.svg';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, amber, red } from '@material-ui/core/colors';
import Layout from './containers/Layout/Layout';

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
      <MuiThemeProvider theme={darkBaseTheme}>
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export default App;
