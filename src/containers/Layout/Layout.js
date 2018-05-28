import React, { Component } from 'react';
import classes from './Layout.css';

import Aux from '../../hoc/Aux/Aux';
import Screen from '../Screen/Screen';

import HeadBar from '../../components/UI/HeadBar/HeadBar';
import SideBar from '../SideBar/SideBar';
import Planner from '../Planner/Planner';

class Layout extends Component {
    state = {
        showSideBar: false,
    };

    sideBarToggle = () => {
        this.setState(prevState => {
            return {
                showSideBar: !prevState.showSideBar,
            };
        });
    };

    render() {
        return (
            <div className={classes.Layout}>
                <SideBar
                    open={this.state.showSideBar}
                    close={this.sideBarToggle}
                />
                <HeadBar clicked={this.sideBarToggle} />
                <Screen>
                    <Planner />
                </Screen>
            </div>
        );
    }
}

export default Layout;
