import React, { PureComponent } from 'react';

import Aux from '../../hoc/Auxil/Auxil';
import Calendar from '../../components/UI/Calendar/Calendar';

export default class Planner extends PureComponent {
    state = {
        selectedDate: null,
    };

    getDate = () => {
        return this;
    };
    onDateSelected = (date, { selected }) => {
        console.log('Hi');
        console.log(date);
        return this.setState({ selectedDate: selected ? undefined : date });
    };
    render() {
        return (
            <Aux>
                <Calendar
                    currentlySelected={this.state.selectedDate}
                    onDateSelected={this.onDateSelected}
                />
                <p>
                    selected date:{' '}
                    {this.state.selectedDate
                        ? this.state.selectedDate.toLocaleDateString()
                        : 'Please select a day 👻'}
                </p>
                <p>place for workouts list</p>
            </Aux>
        );
    }
}
