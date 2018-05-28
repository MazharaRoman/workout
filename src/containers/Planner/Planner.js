import React, { PureComponent } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Calendar from '../../components/UI/Calendar/Calendar';

export default class Planner extends PureComponent {
    state = {};

    render() {
        return (
            <Aux>
                <Calendar />
                <p>place for workouts list</p>
            </Aux>
        );
    }
}
