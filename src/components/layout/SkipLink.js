import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './SkipLink.styles.css';

/**
 * A hidden button that displays when focused and, when clicked, focuses the user on some given element.
 */
const SkipLink = (props) => {
    const [focused, setFocused] = useState(false);
    const handleFocus = () => {setFocused(true);}
    const handleBlur = () => {setFocused(false);}
    const jump = () => {document.querySelector(`#${props.to}`).focus();}

    let position = `${props.top ? 'top' : ''} ${props.right ? 'right' : ''} ${props.bottom ? 'bottom' : ''} ${props.left ? 'left' : ''}`;

    const classes = `skip-link ${props.color} ${position} ${focused ? '' : 'screenreader'}`;

    return (
        <Button
            id={`skip-to-${props.to}`}
            className={classes}
            onClick={jump}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            {props.children}
        </Button>
    );
}

SkipLink.propTypes = {
    /**
     * Contents of skip link.
     * Should describe what the button will do.
     */
    children: PropTypes.node.isRequired,
    /** Button display color */
    color: PropTypes.string.isRequired,
    /** ID of element this link skips to */
    to: PropTypes.string.isRequired
};

export default SkipLink;