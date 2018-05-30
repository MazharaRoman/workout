import React from 'react';
import DayPicker from 'react-day-picker';
import classes from './Calendar.css';

const calendar = props => {
    return (
        <DayPicker
            className={classes.Calendar}
            onDayClick={props.onDateSelected}
            selectedDays={props.currentlySelected}
        />
    );
};

export default calendar;
