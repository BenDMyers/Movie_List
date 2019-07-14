import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './SkipLink.styles.css';
import validateExclusiveProps from '../../utils/validateExclusiveProps';

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
     * Boolean flag for whether the skip link should be aligned with the bottom of the screen.
     * Cannot be used with the `top` prop.
     */
    bottom: validateExclusiveProps(['top'], 'boolean'),
    /**
     * Contents of skip link.
     * Should describe what the button will do.
     */
    children: PropTypes.node.isRequired,
    /** Button display color */
    color: PropTypes.string.isRequired,
    /**
     * Boolean flag for whether the skip link should be aligned with the left side of the screen.
     * Cannot be used with the `right` prop.
     */
    left: validateExclusiveProps(['right'], 'boolean'),
    /**
     * Boolean flag for whether the skip link should be aligned with the right side of the screen.
     * Cannot be used with the `left` prop.
     */
    right: validateExclusiveProps(['left'], 'boolean'),
    /** ID of element this link skips to */
    to: PropTypes.string.isRequired,
    /**
     * Boolean flag for whether the skip link should be aligned with the top of the screen.
     * Cannot be used with the `right` prop.
     */
    top: validateExclusiveProps(['right'], 'boolean')
};

export default SkipLink;