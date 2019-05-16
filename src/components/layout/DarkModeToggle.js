import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/core/styles';
import useDarkMode from 'use-dark-mode';

import './DarkModeToggle.styles.css';

const styles = theme => ({
    switchBase: {
        '&$checked': {color: 'white', '& + $bar': {backgroundColor: '#3f51b5'}},
        transition: theme.transitions.create('transform', {duration: theme.transitions.duration.shortest, easing: theme.transitions.easing.sharp}),
    },
    checked: {
        transform: 'translateX(15px)',
        '& + $bar': {opacity: 1, border: 'none'},
    },
    bar: {
        borderRadius: 13,
        width: 42,
        height: 26,
        marginTop: -13,
        marginLeft: -21,
        border: 'solid 1px',
        borderColor: '#222',
        backgroundColor: '#555',
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border'])
    },
    icon: {width: 24, height: 24},
    iconChecked: {boxShadow: theme.shadows[1]}
});

const DarkModeToggle = (props) => {
    const darkMode = useDarkMode(false);

    const moonLabel = (
        <span className="dark-mode-moon">
            <Icon aria-hidden="true" className="fa fa-moon"/>
            <span className="screenreader">
                Dark mode is {darkMode.value ? 'on' : 'off'}. Press to toggle.
            </span>
        </span>
    );

    return (
        <FormControlLabel
            className="dark-mode-toggle"
            control={
                <Switch
                    checked={darkMode.value}
                    onChange={darkMode.toggle}
                    classes={props.classes}
                />
            }
            label={moonLabel}
        />
    );
};

export default withStyles(styles)(DarkModeToggle);