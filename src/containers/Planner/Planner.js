import React, { PureComponent } from 'react';
import Aux from '../../hoc/Aux';

export default class Planner extends PureComponent {
    state = {};

    render() {
        return (
            <Aux>
                <p>Place for calendar</p>
                <p>place for workouts list</p>
            </Aux>
        );
    }
}
