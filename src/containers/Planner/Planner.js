import React, { PureComponent } from 'react';

import Aux from '../../hoc/Auxil/Auxil';
import Calendar from '../../components/UI/Calendar/Calendar';

export default class Planner extends PureComponent {
    state = {
        selectedDate: null,
        workous: [
            {id:1, description: 'some description on workout number 1', name: 'name of workout', schedule: {type:'s'}, exercises: [
                {id: 1, name: 'pushups', description: {text: 'description of pushups', pictures: ['picture one', 'picture two']} },
                {id: 2, name: 'pullups', description: {text: 'description of pullups', pictures: ['picture one', 'picture two']} }
            ]},
            {id:2, description: 'some description on workout number 1', name: 'name of workout', exercises: [
                {id: 1, name: 'pushups', description: {text: 'description of pushups', pictures: ['picture one', 'picture two']} },
                {id: 2, name: 'pullups', description: {text: 'description of pullups', pictures: ['picture one', 'picture two']} }
            ]},
        ]
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
        // const = 
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
